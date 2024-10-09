const Note = require('../models/noteM');

// Get all notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one note
const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new note
const createNote = async (req, res) => {
  const newNote = new Note(req.body);
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Update a note
const updateNote = async (req, res) => {
  const noteID = req.params.id;
  const { title, content, year } = req.body; // Assuming note has title and content
  try {
    const updatedNote = await Note.findByIdAndUpdate(noteID, {
      title,
      content,
      year,
    });
    res.json({ updatedNote });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a note
const deleteNote = async (req, res) => {
  const noteID = req.params.id;
  try {
    await Note.findByIdAndDelete(noteID);
    res.status(200).json({ Success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getNotes, getNote, createNote, updateNote, deleteNote };