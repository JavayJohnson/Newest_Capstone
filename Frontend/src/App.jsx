import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BlackExcellenceFacts from './pages/BlackExcellenceFacts';
import BlackExcellenceTimeline from './pages/BlackExcellenceTimeline';
import BlackExcellenceQuiz from './pages/BlackExcellenceQuiz';
import BlackExcellenceBlog from './pages/BlackExcellenceBlog';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './pages/Carousel'; 
import './App.css';  // Import the styles for App

function App() {
  const [notes, setNotes] = useState([]);
  const [books, setBooks] = useState([]);
  const [people, setPeople] = useState([]);

  // Fetch notes from the backend API when the component is mounted
  useEffect(() => {
    fetch('http://localhost:5000/api/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error('Error fetching notes:', error));
  }, []);

  // Fetch notes from the backend API when the component is mounted
  useEffect(() => {
    fetch('http://localhost:5000/api/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error('Error fetching notes:', error));
  }, []);

    // Fetch notes from the backend API when the component is mounted
    useEffect(() => {
      fetch('http://localhost:5000/api/notes')
        .then((res) => res.json())
        .then((data) => setNotes(data))
        .catch((error) => console.error('Error fetching notes:', error));
    }, []);




  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/black-excellence-facts">Black Excellence Facts</Link></li>
            <li><Link to="/black-excellence-timeline">Timeline</Link></li>
            <li><Link to="/black-excellence-quiz">Quiz</Link></li>
            <li><Link to="/black-excellence-blog">Blog</Link></li>
            <li><Link to="/media">Media</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/black-excellence-facts" element={<BlackExcellenceFacts />} />
            <Route path="/black-excellence-timeline" element={<BlackExcellenceTimeline />} />
            <Route path="/black-excellence-quiz" element={<BlackExcellenceQuiz />} />
            <Route path="/black-excellence-blog" element={<BlackExcellenceBlog />} />
            <Route path="/media" element={<Carousel />} />  {/* Updated to use Carousel */}
          </Routes>

          {/* Display fetched notes */}
          <section>
            <h1>Notes</h1>
            <ul>
              {notes.map((note) => (
                <li key={note._id}>{note.title}</li>
              ))}

<h1>Notes</h1>
            <ul>
              {notes.map((note) => (
                <li key={note._id}>{note.title}</li>
              ))}


<h1>Notes</h1>
            <ul>
              {notes.map((note) => (
                <li key={note._id}>{note.title}</li>
              ))}

            </ul>
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
