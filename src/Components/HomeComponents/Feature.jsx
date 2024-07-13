import React from 'react';
import './Feature.css';
import feature from '../../assets/feature.png';
import tornlast from '../../assets/tornlast.png';

function Feature() {
  return (
    <div>
      <img src={tornlast} alt='torn paper' className='last-torn-feat' />
      <div className="TEXT-FEAT">
        <h1 className='F-Title' data-text="WE GOT EVERYTHING COVER FOR YOU">WE GOT EVERYTHING COVER FOR YOU</h1>
        <h3 className='F-SubTitle' data-text="Everything Everywhere All at Once">Everything Everywhere All at Once</h3>
      </div>  
      <div className="Feat">
        <img src={feature} alt="feature" className="Feat-img" />
      </div>
    </div>
  );
}

export default Feature;
