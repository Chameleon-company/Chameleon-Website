const express = require('express');
const cors = require('cors');
const helloRoutes = require('./routes/helloRoutes');

const app = express();

app.use(cors());
app.use(helloRoutes);

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
