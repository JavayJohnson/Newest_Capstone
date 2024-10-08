const Book = require('../models/bookM');

// Get all Books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getBook = async (req, res) => {
  try {
    const book = await Book.findByID();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new Book
const createBook = async (req, res) => {
  const newBook = new Book(req.body);
  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const updateBook = async (req, res) => {
  const bookID = req.params.id;
  const published = req.body.published;
  const title = req.body.title;
  const author = req.body.author;
  try {
    const updatedBook = await Book.findByIdAndUpdate(bookID, {
      title: title,
      author: author,
      published: published,
    });
    res.json({ updatedBook: updatedBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  const bookID = req.params.id;
  try {
    await Book.findByIdAndDelete(bookID);
    res.status(200).json({ Success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };

