const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  reg_no : {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  otp: {
    type: Number,
    required: true
  },
  verified: {
    type: String,
    default: false
  },
  forgot:{
    type: String,
    default: "false"
  }
});

const User = mongoose.model('user', userSchema);
User.createIndexes();

module.exports = User;