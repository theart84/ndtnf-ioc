const {Schema, model} = require('mongoose');

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  authors: {
    type: String,
    default: ''
  },
  favorite: {
    type: String,
    default: ''
  },
  fileCover: {
    type: String,
    default: ''
  },
  fileName: {
    type: String,
    default: ''
  },
  fileBook: {
    type: String,
    default: ''
  }
}, { timestamps: true})

module.exports = model('Book', bookSchema);

