const mongoose= require('mongoose');
const Schema= mongoose.Schema;

// Create a new person
const peopleSchema= new Schema({
  firstName: String,
  lastName: String,
  dob: String,
});

module.exports = mongoose.model("Person", peopleSchema);




