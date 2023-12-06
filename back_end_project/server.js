const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/chatbot', async (req, res) => {
  const { userMessage } = req.body;

  try {
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const API_KEY = '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';

    const data = JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
    };

    const response = await new Promise((resolve, reject) => {
      const request = https.request(API_URL, options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
          responseData += chunk;
        });

        res.on('end', () => {
          resolve(responseData);
        });
      });

      request.on('error', (error) => {
        reject(error);
      });

      request.write(data);
      request.end();
    });

    try {
      const parsedData = JSON.parse(response);

      console.log('Parsed Data:', parsedData); // Log the parsed data

      if (parsedData.choices && parsedData.choices.length > 0) {
        const chatResponse = { content: parsedData.choices[0].message.content.trim(), role: 'incoming' };
        res.json(chatResponse);
      } else {
        console.error('Invalid or empty choices array in API response');
        res.status(500).json({ error: 'Invalid or empty choices array in API response' });
      }
    } catch (error) {
      console.error('Error parsing response:', error);
      res.status(500).json({ error: 'Invalid API response format' });
    }

  } catch (error) {
    console.error('Error making request to OpenAI API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
