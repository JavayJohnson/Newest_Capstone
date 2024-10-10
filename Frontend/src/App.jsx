// import './index.css'; // Import index.css for global styles
// import './BlackExcellenceTimeline.css';
// import './BlackExcellenceQuiz.css';
// import './BlackExcellenceBlog.css';
// import './BlackExcellenceFacts.css';
// import './Carousel.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import BlackExcellenceFacts from './components/BlackExcellenceFacts';
import BlackExcellenceTimeline from './components/BlackExcellenceTimeline';
import BlackExcellenceQuiz from './components/BlackExcellenceQuiz';
import BlackExcellenceBlog from './components/BlackExcellenceBlog';
// import Media from './pages/Media';
import Header from './components/Header';
import Footer from './components/Footer';


// import Media from './pages/Media';
// import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
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
            {/* <li><Link to="/media">Media</Link></li> */}
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/black-excellence-facts" element={<BlackExcellenceFacts />} />
            <Route path="/black-excellence-timeline" element={<BlackExcellenceTimeline />} />
            <Route path="/black-excellence-quiz" element={<BlackExcellenceQuiz />} />
            <Route path="/black-excellence-blog" element={<BlackExcellenceBlog />} />
            {/* <Route path="/media" element={<Media />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
