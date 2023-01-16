const mongoose = require('mongoose');

const { Schema } = mongoose;

const marksSchema = new Schema({
  stud:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
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
  grades: {
    type: String,
    required: true
  },
  credit : {
    type: String,
    required: true
  },
  facultyname: {
    type: String,
    required: true
  },
  facultyid: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('student',marksSchema);