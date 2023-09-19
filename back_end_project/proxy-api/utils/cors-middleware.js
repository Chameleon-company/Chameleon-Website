/**
 * Cross Origin Resource Sharing (CORS):
 * 
 * CORS is used to control which origins are allowed to make requests on this API
 * 
 * The origin of the request is found within the request header.
 * It should be noted that the request header can be spoofed, 
 * however it is a basic way to prevent untrusted sources from perfoming requests.
 */ 

const cors = require('cors');

const corsOptions = {
  origin: ["http://localhost:3000"], 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

module.exports = cors(corsOptions);
