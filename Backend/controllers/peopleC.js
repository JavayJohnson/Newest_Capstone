const People = require('../models/peopleM');

// Get all People
const getPeople = async (req, res) => {
  try {
    const people = await People.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one People
const getPerson = async (req, res) => {
  try {
    const person = await People.findById(req.params.id);
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new People
const createPerson = async (req, res) => {
  const newPerson = new People(req.body);
  try {
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Update a People
const updatePerson = async (req, res) => {
  const personId = req.params.id;
  const { firstName, lastName, dob } = req.body;
  try {
    const updatedPerson = await People.findByIdAndUpdate(personId, {
      firstName,
      lastName,
      dob,
    });
    res.json({ updatedPerson });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a People
const deletePerson = async (req, res) => {
  const personId = req.params.id;
  try {
    await People.findByIdAndDelete(personId);
    res.status(200).json({ Success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPeople, getPerson, createPerson, updatePerson, deletePerson };