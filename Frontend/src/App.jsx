import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import BlackExcellenceFacts from './components/BlackExcellenceFacts';
import BlackExcellenceTimeline from './components/BlackExcellenceTimeline';
import BlackExcellenceQuiz from './components/BlackExcellenceQuiz';
import BlackExcellenceBlog from './components/BlackExcellenceBlog';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel'; 
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

  // Fetch people from the backend API when the component is mounted
  useEffect(() => {
    fetch('http://localhost:5000/api/people')
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((error) => console.error('Error fetching people:', error));
  }, []);

  // Fetch books from the backend API when the component is mounted
  useEffect(() => {
    fetch('http://localhost:5000/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
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
          
          
           
      
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
