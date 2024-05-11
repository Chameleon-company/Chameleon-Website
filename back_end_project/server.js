const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helloRoutes = require('./routes/helloRoutes');
const authRoutes = require('./routes/authRoutes');
const newsRouters = require('./routes/newsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(helloRoutes);
app.use("/auth",authRoutes);
// use newsRouters
app.use('/news', newsRouters);

app.listen(3002, () => {
  console.log('Server listening on port 3002');
});
