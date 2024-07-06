import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Notes from './Pages/Notes';
import Doubt from './Pages/Doubt';
import PYQ from './Pages/PYQ';
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
