const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index.js');
chai.use(chaiHttp);

const { subRouteDefinitions } = require('./example.routes.js');
const endpoint = "/example"

// Main heading for tests
describe('Example API Endpoint tests', () => {
    // Build 'hello-world' sub-route to use in below request
    const helloWorldRoute = endpoint + subRouteDefinitions.helloWorld;

    // Heading for this set of tests
    describe(`GET ${helloWorldRoute}`, () => {

        // What the following code *should* do
        it('should return "Hello World!" message', async () => {
            // Get the response using chai.get
            const response = await chai.request(app).get(helloWorldRoute);

            // the response is expected to have a status code of 200
            chai.expect(response).to.have.status(200);

            // The response body should contain JSON data,
            // within the json data, the key 'message' should have the value 'Hello World!'
            chai.expect(response.body.message).to.equal('Hello World!');

            // test will pass if *all* expectations have been met
        });

    });


    // Build 'echo' sub-route to use in below request
    const echoRoute = endpoint + subRouteDefinitions.echo;

    // Heading for this set of tests 
    describe(`POST ${echoRoute}`, () => {

        // What the following code *should* do
        it('should echo back the request body', async () => {
            // Create request data
            const requestData = { Hello: 'World!' };

            // using chai, send a post request with requestData
            const response = await chai.request(app).post(echoRoute).send(requestData);

            // the response is expected to have a status code of 200
            chai.expect(response).to.have.status(200);

            // The response body should contain JSON data,
            // within the json data, the key 'message' should have the same value as requestData
            chai.expect(response.body.message).to.deep.equal(requestData);

            // test will pass if *all* expectations have been met
        });

        // What the following code *should* do
        it('should return an error if request body is empty', async () => {
            // using chai, send a post request with no data
            const response = await chai.request(app).post(echoRoute).send({});

            // The response is expected to have a status code of 400
            chai.expect(response).to.have.status(400);

            // The response body should contain JSON data,
            // within the json data, the key 'message' should have the value 'Empty request body!'
            chai.expect(response.body.message).to.equal('Empty request body!');

            // test will pass if *all* expectations have been met
        });

    });
});
