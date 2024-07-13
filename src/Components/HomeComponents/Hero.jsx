import React, { useRef, useEffect, useCallback } from 'react';
import './Hero.css';
import FINALPNG from '../../assets/FINALPNG.png';

import animation1 from '../../assets/1.gif';
import animation2 from '../../assets/2.gif';
import animation3 from '../../assets/3.gif';
import animation4 from '../../assets/4.gif';
import animation5 from '../../assets/5.gif';
import animation7 from '../../assets/7.gif';
import animation8 from '../../assets/8.gif';
import animation9 from '../../assets/9.gif';
import animation11 from '../../assets/11.gif';
import animation12 from '../../assets/12.gif';

const Hero = () => {
  const elementsRef = useRef([]);

  const gifs = [
    { className: 'animation1', animationData: animation1 },
    { className: 'animation2', animationData: animation2 },
    { className: 'animation3', animationData: animation3 },
    { className: 'animation4', animationData: animation4 },
    { className: 'animation5', animationData: animation5 },
    { className: 'animation7', animationData: animation7 },
    { className: 'animation8', animationData: animation8 },
    { className: 'animation9', animationData: animation9 },
    { className: 'animation11', animationData: animation11 },
    { className: 'animation12', animationData: animation12 },
  ];

  const GifComponent = ({ className, animationData, index }) => {
    const handleGifMouseMove = useCallback((e) => {
      const element = elementsRef.current[index];
      if (element) {
        const rect = element.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 10;
        const y = (e.clientY - rect.top - rect.height / 2) / 10;
        element.style.transform = `translate(${x}px, ${y}px)`;
      }
    }, [index]);

    useEffect(() => {
      window.addEventListener('mousemove', handleGifMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleGifMouseMove);
      };
    }, [handleGifMouseMove]);

    return (
      <div className={className} ref={(el) => (elementsRef.current[index] = el)}>
        <img src={animationData} alt={`Animation ${index}`} className="gif-img" />
      </div>
    );
  };

  return (
    <div className='Homepagetry'>
      <div className="marking">
        <img className='hero-img' src={FINALPNG} alt="Hero" />
        <svg id='marker' width="600" height="221" viewBox="0 0 558 206" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M556.245 134.773C467.575 179.243 47.4196 229.474 6.27055 129.113C-25.6705 51.2095 138.718 10.9139 188.54 5.09442C260.128 -3.26732 458.683 -2.18675 472.824 69.5222C482.183 116.983 425.732 151.372 392.606 163.192C333.489 184.286 272.579 197.691 209.936 204.01" stroke="#FFC425" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      {gifs.map((gif, index) => (
        <GifComponent
          key={index}
          className={gif.className}
          animationData={gif.animationData}
          index={index}
        />
      ))}
      <div className="grid-background-container">
        <div className="grid-background-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
