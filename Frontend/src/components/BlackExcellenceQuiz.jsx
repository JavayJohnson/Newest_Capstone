import React, { useState } from 'react';
import './BlackExcellenceQuiz.css';

const BlackExcellenceQuiz = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    { 
      question: "Who was the first Black president of the United States?", 
      options: ["Barack Obama", "George Washington Carver", "Frederick Douglass"], 
      answer: "Barack Obama" 
    },
    { 
      question: "In what year was the Civil Rights Act passed?", 
      options: ["1954", "1964", "1974"], 
      answer: "1964" 
    },
    { 
      question: "Who led the Montgomery Bus Boycott?", 
      options: ["Harriet Tubman", "Rosa Parks", "Martin Luther King Jr."], 
      answer: "Rosa Parks" 
    }
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[questionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = questionIndex + 1;
    if (nextQuestion < questions.length) {
      setQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div id="quiz">
      <h1>Black Excellence Quiz</h1>
      <p>Test your knowledge of Black inventors and their contributions!</p>

      {showScore ? (
        <div>
          <p>Your final score: {score}/{questions.length}</p>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[questionIndex].question}</h2>

          <div className="quiz-options">
            {questions[questionIndex].options.map((option, index) => (
              <button 
                key={index} 
                className="option-button" 
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlackExcellenceQuiz;
