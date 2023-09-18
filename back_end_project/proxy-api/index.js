const express = require('express');
const app = express();
const port = 3000;

// Used for environment variables
require('dotenv').config();

// Allow the application to parse json bodies
app.use(express.json());

// Use the configured CORS middleware
const corsMiddleware = require('./utils/cors-middleware');
app.use(corsMiddleware);

// Use the configured rate-limit (applied globally)
const rateLimitMiddleware = require('./utils/rate-limit-middleware');
app.use(rateLimitMiddleware);

// Import Route Registrar and apply routes to app
const routeRegistrar = require('./routes/routeRegistrar.js');
const req = require('express/lib/request');
app.use('/', routeRegistrar);

// Start the server, export it so it can be used with the testing framwork
module.exports = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
