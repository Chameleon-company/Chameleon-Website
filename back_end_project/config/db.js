const mongoose = require('mongoose');
const keys = require('./keys')    //Add dabase link here
const link = keys.mongoUrl;

const connectDB = async () => {
  try {
    await mongoose.connect(link, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(console.log("Connected to mongodb"));
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;