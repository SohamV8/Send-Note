// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Notes from './Components/Notes';
import Doubt from './Components/Doubt';
import PYQ from './Components/PYQ';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/Notes">
              <Notes />
            </Route>
            <Route path="/Doubt">
              <Doubt />
            </Route>
            <Route path="/PYQ">
              <PYQ />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
