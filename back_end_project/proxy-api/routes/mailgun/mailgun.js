/**
 * Define a router that will include all subroutes for this route.
 * The router is then exported and used by 'routeRegistrar.js' to mount these subroutes.
 */
const express = require('express');
const router = express.Router();

// Import Subroute Definitions to be used when defining route logic (route handlers)
const { subRouteDefinitions } = require('./mailgun.routes.js');

// Import Mailgun and create instance
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

// Convert to use SystemVariables
const mg = mailgun.client({
	username: 'api',
	key: process.env.MAILGUN_API_KEY || ''
});

// Mailing list domain, 
// also referred to as "Alias address" 
const mailing_list_domain = process.env.MAILGUN_MAILING_LIST_DOMAIN;


// SUBSCRIBE
// Adds a user with the given details to the list
// If no name is supplied, the email address is used as the name
router.post(subRouteDefinitions.subscribe, async (req, res) => {

    // Extract email address and name from the request body
    const { address, name } = req.body;

    // Create the subscriber
    const subscriber = {
      address: address,
      name: name || address, // If no name is supplied, use email address
      vars: null,
      subscribed: 'yes',
      upsert: 'no',
      // UPSERT is a *terrible* word, it means "UPDATE OR INSERT"
    };
  
    try {
      // Subscribing member here
      await mg.lists.members.createMember(mailing_list_domain, subscriber);
  
      // Upon successful subscription, return the response
      res.status(200).json({
        message: 'Successfully subscribed address to Chameleon Mailing list',
      });
    } 
    
    catch (error) {
      // Return the error with status 400
      res.status(400).json({
        message: error || 'Failed to subscribe address to Chameleon Mailing list',
      });
    }

});

// UNSUBSCRIBE
// User will remain on the list but not receive emails sent to the list
router.post(subRouteDefinitions.unsubscribe, async (req, res) => {

    // Try to update existing member
    try {
        // Update existing member here
        await mg.lists.members.updateMember(
            mailing_list_domain, 
            req.body.address, 
            { subscribed: 'no' }
        );

        // Upon successful update, return the response
        res.status(200).json({
            message: 'Successfully unsubscribed address from Chameleon Mailing list',
        });
    } 
    
    // If an error occurs, respond with it
    catch (error) {
        res.status(400).json({
            message: error || 'Failed to unsubscribe address from Chameleon Mailing list',
        });
    }

})

// DELETE USER FROM LIST
// address will be completely removed from the list
router.post(subRouteDefinitions.removeAddress, async (req, res) => {

    // Try to remove address from the list
    try{
        // Despite the call name, the member will not be physically harmed (according to the documentation)
        await mg.lists.members.destroyMember(mailing_list_domain, req.body.address);
        res.status(200).json({
            message: 'Successfully deleted address Chameleon Mailing from list',
        });
    }

    // If an error occurs, respond with it
    catch (error) {
        res.status(400).json({
            message: error || 'Failed to delete address Chameleon Mailing from list',
        });
    }

});

// Export the router
module.exports = router;
