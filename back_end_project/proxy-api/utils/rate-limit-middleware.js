const rateLimit = require('express-rate-limit');

// Limits the amount of requests a client can make within a given time
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 25, // maximum requests per windowMS
    message: 'Too many requests from this IP, please try again later.',
});

module.exports = limiter;