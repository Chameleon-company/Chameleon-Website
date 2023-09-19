/**
 * Define a router that will include all subroutes for this route.
 * The router is then exported and used by 'routeRegistrar.js' to mount these subroutes.
 */
const express = require('express');
const router = express.Router();

// Import Subroute Definitions to be used when defining route logic (route handlers)
const { subRouteDefinitions } = require('./example.routes.js');


// HELLO WORLD 
// Responds with a json message
router.get(subRouteDefinitions.helloWorld, (req, res) => {

    // Respond with a message
    res.status(200).json({
        message : 'Hello World!'
    })

})


// ECHO
// Echoes the request body as a response
router.post(subRouteDefinitions.echo, (req, res) => {

    // Get request body
    const requestBody = req.body;

    // If request body includes any data (by checking if there are any keys)
    if(Object.keys(requestBody).length > 0){
        // Respond with json object containing request body
        res.status(200).json({
            message: requestBody
        })
    }

    // If the request body does not include any data
    else{
        // Respond with error code and message
        res.status(400).json({
            message: 'Empty request body!'
        })
    }
})

// Export the router
module.exports = router;
