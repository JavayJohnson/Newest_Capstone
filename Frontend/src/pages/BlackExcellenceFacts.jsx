import React, { useState, useEffect } from 'react';

const BlackExcellenceFacts = () => {
  const [fact, setFact] = useState('');


  

// fix with API Key
  const fetchRandomFact = async () => {
    const response = await fetch('https://blackhistoryapi.com/random-fact');
    const data = await response.json();
    setFact(data.fact);
  };

  useEffect(() => {
    fetchRandomFact();
  }, []);

  return (
    <div id="random-fact">
      <h2>Black Excellence Facts</h2>
      <p>{fact}</p>
      <button onClick={fetchRandomFact}>Get Another Fact</button>
    </div>
  );
};

export default BlackExcellenceFacts;
