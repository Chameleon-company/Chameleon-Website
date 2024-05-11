/* This file should be used to send messages to the mailing list. 
This form should never link to any user facing UI / UX elements 
and is for developer use only. This file can and will likely 
need to be customised to suit the evolving needs of the content 
sent in Chameleon newsletter emails. Please refer to Mailgun API
sending documentation for more details: 
https://documentation.mailgun.com/en/latest/api-sending.html#sending */

/* .env file used in local implementation and will need to be recreated 
if running on localhost, API keys / domain intended to be hosted on GCP
for security purposes. API key and domain can be found within Chameleon Mailgun account. 
lines 14 - 16 will need to be updated to reflect this once transfer from AWS is complete */

const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;
const toList = process.env.MAILGUN_MAILING_LIST;

import formData from 'form-data'; // Form data module allowing submit functionality. 
import Mailgun from 'mailgun.js'; // Import Mailgun API wrapper, allowing interaction with Mailgun. 

// Send new email function. 
// To send your new email after compoisition, run the following command from the root of this folder: node sendMessage  
const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: 'api', key: API_KEY });

(async () => {
    try {

        const data = {
            from: 'Chameleon Newsletter <me@samples.mailgun.org>', // From address, can be customised as needed
            to: [toList], // Email address managing mailing list, sends to all subscribed users.
            subject: 'TEST', // Subject line. 
            text: 'Chameleon new newsletter test!', // Plain text.
            html: '<html>Insert HTML elements here</html>', // HTML section, allowing for greater customisation of emails.
        };

        // Await results of send, if failed, print message to user. 
        const result = await client.messages.create(DOMAIN, data);
        console.log(result);
    } catch (error) {
        console.error('Email failed to send, please try again shortly', error);
    }
})();