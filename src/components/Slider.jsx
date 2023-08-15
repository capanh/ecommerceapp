import React, { useState } from 'react';
import { useEffect } from 'react';

const imageLinks = [
  "https://picsum.photos/500/600?random=1",
  "https://picsum.photos/500/600?random=2",
  "https://picsum.photos/500/600?random=3",
  "https://picsum.photos/500/600?random=4"
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
  
    const goToPreviousSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + imageLinks.length) % imageLinks.length);
    };
  
    const goToNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imageLinks.length);
    };
  
    useEffect(() => {
      const image = new Image();
      image.src = imageLinks[0];
      image.onload = () => {
        setImageWidth(image.width);
      };
    }, []);
  
    return (
      <div className="slider">
        <div className="slider-items">
          <img src={imageLinks[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
        <div className="slider-navigation">
          <div className="slider-arrows left" style={{ gap: `${imageWidth}px` }}>
            <button className="slider-arrow" onClick={goToPreviousSlide}>&lt;</button>
            <button className="slider-arrow" onClick={goToNextSlide}  >&gt;</button>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Slider;
  