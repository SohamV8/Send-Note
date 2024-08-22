import React from 'react';
import './slider.css';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Slider = () => {
  const itemsLeft = images.map((image, index) => (
    <div key={index} className={`itemLeft item${index + 1}`}>
      <img src={image} alt={`Slide ${index + 1}`} />
    </div>
  ));

  const itemsRight = images.map((image, index) => (
    <div key={index} className={`itemRight item${index + 1}`}>
      <img src={image} alt={`Slide ${index + 1}`} />
    </div>
  ));

  return (
    <div className="sliding">
      <div className="wrapperslide">{itemsLeft}</div>
      <h1 className='get'>GET <span className='hand'>HandWritten Notes</span></h1>
      <div className="wrapperslide">{itemsRight}</div>
    </div>
  );
};

export default Slider;
