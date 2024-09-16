const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helloRoutes = require('./routes/helloRoutes');
const authRoutes = require('./routes/authRoutes');
const newsRoutes = require('./routes/newsRoutes'); // Fixed the variable name

const app = express();

app.use(cors());
app.use(express.json());

// Use the hello routes
app.use(helloRoutes);

// Use the auth routes under the /auth path
app.use("/auth", authRoutes);

// Use the news routes under the /news path
app.use('/news', newsRoutes);

// Start the server on port 3002
app.listen(3002, () => {
  console.log('Server listening on port 3002');
});
