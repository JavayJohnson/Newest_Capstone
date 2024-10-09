const connectToDb = require('./config/connectToDb');

connectToDb().then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1); // Exit the process if connection fails
});

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const bookR = require('./routes/bookR');
app.use('/api/books', bookR);

const peopleR = require('./routes/peopleR');
app.use('/api/people', peopleR);

const noteR = require('./routes/noteR');
app.use('/api/notes', noteR);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});