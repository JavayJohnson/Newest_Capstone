import React, { useState } from 'react';
import './Carousel.css'; 

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'image1.jpg', 
    'image2.jpg',
    'image3.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
    'image11.jpg',
    'image12.jpg',
    'image13.jpg',
    'image14.jpg',
    'image15.jpg',
    'image16.jpg',
    'image17.jpg',
    'image18.jpg',
    'image19.jpg',
    'image20.jpg',
    'image21.jpg',
    'image22.jpg',
  ];

  const showSlide = (index) => {
    const totalSlides = images.length;
    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const changeSlide = (direction) => {
    showSlide(currentIndex + direction);
  };

  return (
    <div>
      
      <div className="carousel">
        <div className="carousel-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={index === currentIndex ? 'active' : ''}
            />
          ))}
        </div>
        <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
        <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
      </div>

      {/* Paragraph Section */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>
          1996 - The Late Honorable Rosa L. Parks, known as the mother of the civil rights movement, 
          received a heartfelt "Thank you" from Javay Johnson. Rosa Parks led the Montgomery, Alabama 
          bus boycott in 1955. I had the profoundly monumental privilege and the unforgettable experience 
          of briefly sitting with a courageous Black woman of excellence, who carried the civil rights movement 
          on her shoulders. Her spark, unbridled tenacity, and bravery became a major catalyst in the push for civil 
          rights and the advancement of equality for people of color. In 1999, Parks was awarded the Congressional Gold 
          Medal of Honor, the highest civilian honor in the United States. Rosa Parks, a historical icon who truly embodied 
          Black Excellence, who is forever etched in history and infinitely defined by her courage and legacy.
        </p>
      </div>
    </div>
  );
}

export default Home;
