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
          'x-api-key': 'amZtc29sdXRpb25zVGh1IE9jdCAxMC' // Ensure this is the correct API key
        }
      });
      const data = await response.json();
      setFact(data.Results[0].text); // Update the state with the fetched fact
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
        <p>{fact}</p> {/* Display the fetched random fact */}
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

{/* <div> */}
  {/* Notes Section */}
  {/* <h1 onClick={() => handleCategoryClick('notes')} style={{ cursor: 'pointer' }}>
    Notes
  </h1>
  {activeCategory === 'notes' && (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="Search Notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginBottom: '10px',
        }} */}
      {/* /> */}


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
