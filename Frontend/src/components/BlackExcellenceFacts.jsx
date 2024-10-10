import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './BlackExcellenceFacts.css'; // Importing the CSS file

// The component name should be capitalized
const BlackExcellenceFacts = () => {
  const [fact, setFact] = useState('');
  const [notes, setNotes] = useState([]);
  const [books, setBooks] = useState([]);
  const [people, setPeople] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Example async function to fetch a random fact
  const fetchRandomFact = async () => { 
    try {
      const response = await fetch('https://rest.blackhistoryapi.io/fact/random', {
        headers: {
          'x-api-key': 'SmF2YXlqb2huc29uU3VuIFNlcCAyOS'
        }
      });
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error('Error fetching random fact:', error);
    }
};




  useEffect(() => {
    fetchRandomFact();
  }, []);

  // Handle category selection and reset search term
  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? '' : category);
    setSearchTerm('');
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredPeople = people.filter((person) =>
    person.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="black-excellence-fact">
      {/* Random Fact Section */}
      <div id="random-fact">
        <h2>Black Excellence Facts</h2>
        <p>{fact}</p>
        <button onClick={fetchRandomFact}>Get Another Fact</button>
      </div>

      {/* Categories with Searchable Dropdowns */}
      <div>
        {/* Notes Section */}
        <h1 onClick={() => handleCategoryClick('notes')} style={{ cursor: 'pointer' }}>
          Notes
        </h1>
        {activeCategory === 'notes' && (
          <div>
            <input
              type="text"
              placeholder="Search Notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
              {filteredNotes.map((note) => (
                <li key={note._id}>{note.title}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Books Section */}
        <h1 onClick={() => handleCategoryClick('books')} style={{ cursor: 'pointer' }}>
          Books
        </h1>
        {activeCategory === 'books' && (
          <div>
            <input
              type="text"
              placeholder="Search Books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
              {filteredBooks.map((book) => (
                <li key={book._id}>{book.title}</li>
              ))}
            </ul>
          </div>
        )}

        {/* People Section */}
        <h1 onClick={() => handleCategoryClick('people')} style={{ cursor: 'pointer' }}>
          People
        </h1>
        {activeCategory === 'people' && (
          <div>
            <input
              type="text"
              placeholder="Search People..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
              {filteredPeople.map((person) => (
                <li key={person._id}>{person.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// The export should match the component's name
export default BlackExcellenceFacts;
