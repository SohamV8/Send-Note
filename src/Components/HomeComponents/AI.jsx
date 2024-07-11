import React, { useEffect, useRef } from 'react';
import torntry from '../../assets/torntry.png';
import './AI.css';
import Vortex from './Vortex.jsx';
import { Link } from 'react-router-dom';

const AI = () => {
  const h1Ref1 = useRef(null);
  const h1Ref2 = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const handleMouseOver = (event, ref) => {
      let iteration = 0;
      let interval = null;

      clearInterval(interval);

      interval = setInterval(() => {
        ref.current.innerText = ref.current.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return ref.current.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= ref.current.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const h1Element1 = h1Ref1.current;
    const h1Element2 = h1Ref2.current;

    h1Element1.addEventListener('mouseover', (event) => handleMouseOver(event, h1Ref1));
    h1Element2.addEventListener('mouseover', (event) => handleMouseOver(event, h1Ref2));

    return () => {
      h1Element1.removeEventListener('mouseover', (event) => handleMouseOver(event, h1Ref1));
      h1Element2.removeEventListener('mouseover', (event) => handleMouseOver(event, h1Ref2));
    };
  }, [letters]);

  return (
    <>      
    <div className='AIBack'>
<img src={torntry} alt="torn effect" className="torn" />
      
      <div className="hyperplexed-container">
        <h1 ref={h1Ref1} data-value="HAVE A DOUBT ?">HAVE A DOUBT?</h1>
        <h1 ref={h1Ref2} data-value="LET A.I DO IT FOR YOU">LET A.I DO IT FOR YOU</h1>
      </div>

      <Vortex />

      <div className="containerbtn">
        <Link to="/Doubt" className="btnAI">
          <span className="btnInner">DOUBT</span>
        </Link>
      </div>
    </div>
    </>
  );
};

export default AI;
