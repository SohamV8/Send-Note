const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
});

const FormModel = mongoose.model('Form', formSchema);

module.exports = FormModel;
