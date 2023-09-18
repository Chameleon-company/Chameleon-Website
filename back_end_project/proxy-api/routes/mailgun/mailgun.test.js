const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index.js');
chai.use(chaiHttp);

// Get subroutes and define the endpoint
const { subRouteDefinitions } = require('./mailgun.routes.js');
const endpoint = "/mailgun"

// Ensure a unique email is supplied
// If the email already exists within the mailgun lists, the tests will fail
const test_email = "Leon.s.kennedy@racooncitypd.gov"
const test_name = "Leon S Kennedy"

// Main heading for tests
describe('Mailgun API Endpoint tests', () => {
    const subscribeRoute = endpoint + subRouteDefinitions.subscribe;
    const unsubscribeRoute = endpoint + subRouteDefinitions.unsubscribe;
    const removeAddressRoute = endpoint + subRouteDefinitions.removeAddress;

    
    // Tests for subscribe route
    describe(`${subscribeRoute}`, () => {
        // Create data to post
        const postData = { "address": test_email, "name": test_name };

        // First time subscribing user
        it(`Should subscribe "${test_email}"`, async () => {
            const response = await chai.request(app).post(subscribeRoute).send(postData);
            // Expect response to have a status code of 200
            chai.expect(response).to.have.status(200);
            // Expect response to have specific response in the body message
            chai.expect(response.body.message).to.equal('Successfully subscribed address to list');
        });

        // Second time subscribing the same user as above
        // This should fail as the user has previously been subscribed
        it(`Should not allow "${test_email}" to subscribe twice`, async () => {
            // Post the data
            const response = await chai.request(app).post(subscribeRoute).send(postData);
            // Expect response to have a status code of 400 with the message "address already exists..."
            chai.expect(response).to.have.status(400);
            chai.expect(response.body.message.details).to.include("Address already exists");
        });

    });


    // Tests for unsubscribe route
    describe(`${unsubscribeRoute}`, () => {
        // Create data to post
        const postData = { "address" : test_email };

        // Unsubscribe address
        it(`should unsubscribe "${test_email}"`, async () => {
            const response = await chai.request(app).post(unsubscribeRoute).send(postData);
            chai.expect(response).to.have.status(200);
        });
    });


    //Tests for the removeAddress route
    describe(`${removeAddressRoute}`, () => {
        // Create data to post
        const postData = { "address" : test_email };

        // Remove the address from mailing list
        it(`should remove "${test_email}" from the list`, async () => {
            const response = await chai.request(app).post(removeAddressRoute).send(postData);
            chai.expect(response).to.have.status(200);
        });

        // Unsubscribe the same address
        it(`should advise that "${test_email}" is not in the list`, async () => {
            const response = await chai.request(app).post(removeAddressRoute).send(postData);
            chai.expect(response).to.have.status(400);
            chai.expect(response.body.message.message).to.equal('Not Found');
        });
    });


});
