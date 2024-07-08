import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Hero from '../Components/Hero';
import Slider from '../Components/Slider';
import Torn from '../Components/Torn';
import AI from '../Components/AI';

const Home = () => {
  // Define pathLengths as an array of values
  const pathLengths = [
    0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0  // Add your values here
  ];

  return (
    <div>
      <Hero />
      <Slider />
      <Torn />   
      <AI
        pathLengths={pathLengths}
        title="LET A.I DO THEIR WORK"
        // description="Scroll this component and see the bottom SVG come to life wow this works!"
      />
    </div>
  );
};

export default Home;
