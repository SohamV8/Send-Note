import React, { useRef, useEffect, useCallback } from 'react';
import './Hero.css';
import FINALPNG from '../assets/FINALPNG.png';

import animation1 from '../assets/1.gif';
import animation2 from '../assets/2.gif';
import animation3 from '../assets/3.gif';
import animation4 from '../assets/4.gif';
import animation5 from '../assets/5.gif';
import animation6 from '../assets/6.gif';
import animation7 from '../assets/7.gif';
import animation8 from '../assets/8.gif';
import animation9 from '../assets/9.gif';
import animation10 from '../assets/10.gif';
import animation11 from '../assets/11.gif';
import animation12 from '../assets/12.gif';

const GifComponent = ({ className, animationData, index, elementsRef }) => {
  const handleMouseMove = useCallback((e) => {
    const element = elementsRef.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 10;
      const y = (e.clientY - rect.top - rect.height / 2) / 10;
      element.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [index, elementsRef]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className={className} ref={(el) => (elementsRef.current[index] = el)}>
      <img src={animationData} alt={`Animation ${index}`} />
    </div>
  );
};

const Hero = () => {
  const elementsRef = useRef([]);

  const gifs = [
    { className: 'animation1', animationData: animation1 },
    { className: 'animation2', animationData: animation2 },
    { className: 'animation3', animationData: animation3 },
    { className: 'animation4', animationData: animation4 },
    { className: 'animation5', animationData: animation5 },
    { className: 'animation6', animationData: animation6 },
    { className: 'animation7', animationData: animation7 },
    { className: 'animation8', animationData: animation8 },
    { className: 'animation9', animationData: animation9 },
    { className: 'animation10', animationData: animation10 },
    { className: 'animation11', animationData: animation11 },
    { className: 'animation12', animationData: animation12 },
  ];

  return (
    <div className='Homepagetry'>
      <img className='hero-img' src={FINALPNG} alt="Hero" />
      {gifs.map((gif, index) => (
        <GifComponent
          key={index}
          className={gif.className}
          animationData={gif.animationData}
          index={index}
          elementsRef={elementsRef}
        />
      ))}
    </div>
  );
};

export default Hero;
