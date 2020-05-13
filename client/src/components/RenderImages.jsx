import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const RenderImages = ({ currentColors }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='pdp-carousel-images-wrapper-content'>
      <Carousel activeIndex={index} onSelect={handleSelect} interval='1000000'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={currentColors.image1}
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={currentColors.image2}
            alt='Second slide'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default RenderImages;