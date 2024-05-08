// routes/chatbotRouter.js
const express = require('express');
const chatbotController = require('../controllers/chatbotController');
const router = express.Router();

router.post('/chatbot', chatbotController.getChatbotResponse);

module.exports = router;