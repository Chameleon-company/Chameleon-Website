const fs = require('fs');


// This dictionary is used to generate the .env file
// Where possible, set the value to 'unset', as this is the value checked within routeRegistrar.js
const enviornment_variables_defaults= {
    "ENABLE_PRODUCTION_MODE" : "false",
    "MAILGUN_API_KEY" : "unset",
    "MAILGUN_MAILING_LIST_DOMAIN" : "unset"
};


// If there's an existing .env file, don't replace it
if (fs.existsSync('.env')) {
    console.log("\nexisting .env file found! delete the file and re-run to generte new .env\n");
} 


// No .env file found, create one with the default values as listed above
else {
    // Convert the dictionary to a stirng
    let envContent = '';
    for(const key in enviornment_variables_defaults){
        envContent+=`${key}=${enviornment_variables_defaults[key]}\n`
    };
    // Create a .env file, with the envContent
    fs.writeFileSync('.env', envContent.trim());
    // Log to console
    console.log('\n.env file generated, please update the file to include relevant information\n');
}