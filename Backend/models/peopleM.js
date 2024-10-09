const People = require('./models/peopleM');

// Create a new person
const newPerson = new People({
  firstName: 'John',
  lastName: 'Doe',
  dob: '1990'
});

module.exports = mongoose.model("Person", peopleSchema)