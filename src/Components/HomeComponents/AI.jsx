import React, { useEffect, useRef } from 'react';
import torntry from '../../assets/torntry.png';
import './AI.css';
import Vortex from './Vortex.jsx';

const AI = () => {
  const h1Ref = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const handleMouseOver = (event) => {
      let iteration = 0;
      let interval = null;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const h1Element = h1Ref.current;
    h1Element.addEventListener('mouseover', handleMouseOver);

    return () => {
      h1Element.removeEventListener('mouseover', handleMouseOver);
    };
  }, [letters]);

  return (
    <>
      <img src={torntry} alt="torn effect" className="torn" />
      <Vortex>
        <div className="hyperplexed-container">
          <h1 ref={h1Ref} data-value="HYPERPLEXED">HYPERPLEXED</h1>
        </div>
      </Vortex>
    </>
  );
};

export default AI;
