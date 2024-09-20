const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helloRoutes = require('./routes/helloRoutes');
const authRoutes = require('./routes/authRoutes');
const newsRouters = require('./routes/newsRoutes');
const resourceRouters = require('./routes/resourceRoutes'); //added by Varun Kumar
const commentRouters = require('./routes/commentRouters');

const app = express();

app.use(cors());
app.use(express.json());

app.use(helloRoutes);
app.use("/auth",authRoutes);
// use newsRouters
app.use('/news', newsRouters);
 
app.use('/resources', resourceRouters)  //new line

app.use('/comments', commentRouters); 

app.listen(3002, () => {
  console.log('Server listening on port 3002');
});