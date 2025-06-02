import React, { useEffect, useRef } from 'react';
import torntry from '../../assets/torntry.png';
import './AI.css';
import Vortex from './Vortex.jsx';
import { Link } from 'react-router-dom';

const AI = () => {
  const h1Ref1 = useRef(null);
  const h1Ref2 = useRef(null);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  useEffect(() => {
    const animateText = (ref) => {
      let iteration = 0;
      const interval = setInterval(() => {
        if (!ref.current) return;
        ref.current.innerText = ref.current.dataset.value
          .split('')
          .map((letter, index) => (index < iteration ? letter : letters[Math.floor(Math.random() * 26)]))
          .join('');

        if (iteration >= ref.current.dataset.value.length) {
          clearInterval(interval);
        }
        iteration += 0.33;
      }, 30);

      return () => clearInterval(interval);
    };

    const h1Element1 = h1Ref1.current;
    const h1Element2 = h1Ref2.current;

    const handleMouseOver = (ref) => animateText(ref);

    h1Element1?.addEventListener('mouseover', () => handleMouseOver(h1Ref1));
    h1Element2?.addEventListener('mouseover', () => handleMouseOver(h1Ref2));
    h1Element1?.addEventListener('focus', () => handleMouseOver(h1Ref1));
    h1Element2?.addEventListener('focus', () => handleMouseOver(h1Ref2));

    return () => {
      h1Element1?.removeEventListener('mouseover', () => handleMouseOver(h1Ref1));
      h1Element2?.removeEventListener('mouseover', () => handleMouseOver(h1Ref2));
      h1Element1?.removeEventListener('focus', () => handleMouseOver(h1Ref1));
      h1Element2?.removeEventListener('focus', () => handleMouseOver(h1Ref2));
    };
  }, [letters]);

  return (
    <div className="ai-back">
      <img src={torntry} alt="Decorative torn effect" className="torn" />
      <div className="hyperplexed-container">
        <h1 ref={h1Ref1} data-value="HAVE A DOUBT ?" tabIndex={0}>
          HAVE A DOUBT ?
        </h1>
        <h1 ref={h1Ref2} data-value="LET A.I DO IT FOR YOU" tabIndex={0}>
          LET A.I DO IT FOR YOU
        </h1>
      </div>
      <Vortex />
      <div className="container-btn">
        <Link to="/Doubt" className="btn-ai">
          <span className="btn-inner">DOUBT</span>
        </Link>
      </div>
    </div>
  );
};

export default AI;