const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookModel = new Schema({
  title: { type: String },
  author: { type: String },
  gener: { type: String },
  red: { type: Boolean, default: false },
});

module.exports = mongoose.model('Book', bookModel);
