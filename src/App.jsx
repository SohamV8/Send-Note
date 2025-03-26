import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Notes from './Pages/Notes';
import Doubt from './Pages/Doubt';
import PYQ from './Pages/PYQ';
import Contribute from './Pages/Contribute';
import ARVR from './Pages/ARVR';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6LYGS9Q14T';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-6LYGS9Q14T');
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/doubt" element={<Doubt />} />
        <Route path="/pyq" element={<PYQ />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/arvr" element={<ARVR />} />
      </Routes>
    </Router>
  );
}

export default App;