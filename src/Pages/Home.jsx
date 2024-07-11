import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import Hero from '../Components/HomeComponents/Hero';
import Slider from '../Components/HomeComponents/Slider';
import Torn from '../Components/HomeComponents/Torn';
import AI from '../Components/HomeComponents/AI';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <Torn />
      <AI />
      <Footer />
    </div>
  );
};

export default Home;
