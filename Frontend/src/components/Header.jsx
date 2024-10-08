import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';  // If you have specific styles for the header

const Header = () => {
  return (
    <header>
      <h1>Black Excellence Infinitely Defined</h1>
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
    </header>
  );
};

export default Header;


