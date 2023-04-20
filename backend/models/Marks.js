const mongoose = require('mongoose');

const { Schema } = mongoose;

const marksSchema = new Schema({
  stud:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name:{
    type: String,
    required: true
  },
  reg_no:{
      type: String,
      required: true
  },
  coursename: {
    type: String,
    required: true
  },
  courseid:{
    type: String,
    required: true
  },
  coursetype:{
    type: String,
    required: true
  },
  slot:{
    type: String,
    required: true
  },
  grades: {
    type: String,
    required: true
  },
  credit : {
    type: Number,
    required: true
  },
  facultyname: {
    type: String,
    required: true
  },
  facultyid: {
    type: String,
    required: true
  },
  reg_date: {
    type: Date,
    required: true
  },
  termend_date: {
    type: Date,
    required: true
  },
  re_reg: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model('student',marksSchema);