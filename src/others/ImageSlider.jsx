import React, { useState, useEffect } from 'react';
import './ImageSlider.css';  
const ImageSlider = () => {
  const images = [
    'https://appxcontent.kaxa.in/subject/2024-07-07-0.9522250790418232.png',
    'https://appxcontent.kaxa.in/subject/2024-07-05-0.8025085370209641.jpeg',
    'https://appxcontent.kaxa.in/subject/2024-07-05-0.3715048534115637.jpeg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 6000;

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [images.length, intervalTime]);

  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="slides">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide rounded w-100 img-fluid cursor-pointer ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot  ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;