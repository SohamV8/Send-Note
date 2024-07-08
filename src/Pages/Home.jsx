import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
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
