import React from 'react';
import './BlackExcellenceBlog.css';  

const BlackExcellenceBlog = () => {
  return (
    <div className="center-text">
      <h1>Black Excellence Blog</h1>
      <p>Read insightful articles about Black history, inventors, and modern-day innovations.</p>
{/*       
      Buttons linking to external blogs */}
      
      <div className="button-container">
        <a href="https://www.aaihs.org/about-black-perspectives/" className="blog-button" target="_blank">Black Perspectives</a>
        <a href="https://www.blackisamericapodcast.com/blog/" className="blog-button" target="_blank">Black is America Podcast Blog</a>
        <a href="https://blackamericanhistory.org/newsletter/" className="blog-button" target="_blank">Black American History Newsletter</a>
      </div>
      
      
    </div>
  );
};

export default BlackExcellenceBlog;
