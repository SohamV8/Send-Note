import React from 'react';
import './pyq.css';
import '../App.css';
import Loader from './Loader'

function PYQ() {
  return (
    <>
    <Loader />
    <div id="iframe-container">
      
      <iframe src="https://www.ncuindia.edu/?s=past+year" width="100%" height="100%"></iframe>
    </div>
    </>
  );
}

export default PYQ;
