const express = require('express');
const helloController = require('../controllers/helloController');

const router = express.Router();

router.get('/hello/:name', helloController.sayHello);

module.exports = router;
