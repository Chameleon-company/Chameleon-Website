const express = require('express');
const cors = require('cors');
const helloRoutes = require('./routes/helloRoutes');
const authRoutes = require('./routes/authRoutes');
const connectDB = require("./config/db");


const app = express();

//connect to database
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use('/auth', authRoutes);

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
