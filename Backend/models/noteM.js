// Import mongoose
const mongoose = require('mongoose');

// Define mongoose Schema
const Schema = mongoose.Schema;

// Define note schema
const noteSchema = new Schema({
  title: String,
  content: String,
});

// Export Note model
module.exports = mongoose.model("Note", noteSchema);
