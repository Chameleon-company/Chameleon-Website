// controllers/chatbotController.js
const { queryOpenAi } = require('../services/openAiService');

async function getChatbotResponse(req, res) {
    try {
        const { prompt } = req.body;
        const response = await queryOpenAi(prompt);
        console.log(response); // Check what is being returned
        res.json(response); // Send response back to client
    } catch (error) {
        console.error('Error processing your request:', error);
        res.status(500).json({ message: "Error processing your request", error: error.message });
    }
}

module.exports = {
  getChatbotResponse
};

