// Define router that will import all other routes
const express = require('express');
const router = express.Router();

// Boolean if we're in production mode or not
const isProductionMode = process.env.ENABLE_PRODUCTION_MODE === 'true';

// Log what mode we are starting in
if(isProductionMode){
    console.log("Starting in PRODUCTION mode")
}else{
    console.log("Starting in DEVELOPMENT mode")
}

console.log("\nMounting Routes...")

// List of routes to be mounted
const routesToMount = {

    example : {
        filePath : './example/example.js',
        routeName: 'example',
        envrionmentVariables: null,
        development_mode_only: true,
    },

    mailgun : {
        filePath : './mailgun/mailgun.js',
        routeName: 'mailgun',
        environmentVariables: ["MAILGUN_API_KEY", "MAILGUN_MAILING_LIST_DOMAIN"],
        development_mode_only: false,
    }

}

// iterate through routeInformation and mount the routes
for (const routeName in routesToMount) {
    const routeInfo = routesToMount[routeName]
    mountRoute(routeInfo);
}

// Used to mount a route
// Checks route is mountable in current mode (DEVELOPMENT/PRODUCTION)
// Checks if the routes associated enviornment variables have been set
function mountRoute(routeInfo){
    
    // Check if route is only mountable in development mode
    if(routeInfo.development_mode_only && isProductionMode){
        console.log(`📋 ${routeInfo.routeName} routes not mounted, only mountable in development mode!`)
        return;
    }

    // Check if environment variables are required for this route
    if(routeInfo.environmentVariables){
        // Iterate through the list of environment variables
        for(const env_var of routeInfo.environmentVariables){
            // Check the variable exists and is not 'unset'
            if(!process.env[env_var] || process.env[env_var] === 'unset'){
                console.log(`🔑 ${routeInfo.routeName} routes not mounted, ${env_var} has not been set!`)
                return;
            }
        }
    }

    // Try to mount the route
    try{
        const route = require(routeInfo.filePath);
        router.use(`/${routeInfo.routeName}`, route);
        console.log(`✔️  ${routeInfo.routeName} routes mounted...`)
    }
    
    // Print error if caught
    catch(error){
        console.log(`❗ Error mounting ${routeInfo.routeName} routes!`);
    }
}

console.log();

// Export router to be used with index.js
module.exports = router;