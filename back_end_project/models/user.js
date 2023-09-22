var mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");
var Schema = mongoose.Schema;

userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, 
  },
  password: {
    type: String,
    required: true,
  },
});

// userSchema.plugin(uniqueValidator);
User = mongoose.model("User", userSchema);

module.exports = User;