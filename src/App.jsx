import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

    // Initialize GA
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
  }, []);

  // Track route changes with popstate
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof gtag === 'function') {
        gtag('config', 'G-6LYGS9Q14T', {
          page_path: window.location.pathname + window.location.search,
        });
      }
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/doubt">
          <Doubt />
        </Route>
        <Route path="/pyq">
          <PYQ />
        </Route>
        <Route path="/contribute">
          <Contribute />
        </Route>
        <Route path="/arvr">
          <ARVR />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;