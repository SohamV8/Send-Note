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

// Define gtag function globally
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}

function App() {
  useEffect(() => {
    // Load gtag.js script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6LYGS9Q14T';
    script.async = true;
    document.head.appendChild(script);

    // Initialize GA once script loads
    script.onload = () => {
      gtag('js', new Date());
      gtag('config', 'G-6LYGS9Q14T', {
        page_path: window.location.pathname + window.location.search,
      });
    };

    // Cleanup (optional)
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Runs only on mount

  // Track route changes manually with a custom listener
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof gtag === 'function') {
        gtag('config', 'G-6LYGS9Q14T', {
          page_path: window.location.pathname + window.location.search,
        });
      }
    };

    // Listen to history changes (popstate for browser back/forward)
    window.addEventListener('popstate', handleRouteChange);

    // Since Router doesn't expose a direct event, we rely on this workaround
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/doubt" element={<Doubt />} />
        <Route path="/pyq" element={<PYQ />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/arvr" element={<ARVR />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;