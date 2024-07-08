import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Hero from '../Components/Hero';
import Slider from '../Components/Slider';
import Torn from '../Components/Torn';
import AI from '../Components/AI';

function Home() {
  return (
    <div>
      <Hero />
<Slider />
   <Torn />   
<AI />
    </div>
  );
}

export default Home;
