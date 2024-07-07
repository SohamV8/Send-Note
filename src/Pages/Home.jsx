// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import heroImage from "../assets/3d3.png";
import notesImage from '../assets/3d8.png';
import doubtImage from '../assets/3d5.png';
import pyqImage from '../assets/3d2.png';
import Hero from '../Components/Hero';
import Slider from '../Components/Slider';
import Torn from '../Components/Torn';

function Home() {
  return (
    <div>
      <Hero />

<Slider />
   <Torn />   
    </div>
  );
}

export default Home;
