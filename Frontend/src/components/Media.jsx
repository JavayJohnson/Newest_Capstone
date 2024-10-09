import React, { useState } from 'react';
import './carousel.css'; 
import Carousel from '../pages/Carousel'
// Make sure this path is correct

const Media = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    'image1.jpg',  // Replace these with your actual image URLs
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

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="carousel">
      <Carousel/>
      <div className="carousel-images">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Carousel ${index}`}
            className={index === currentImage ? 'active' : ''}
          />
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Media;
