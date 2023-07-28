const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  
});

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  headerImage: {
    type: String,
  },
  questions: [questionSchema],
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
