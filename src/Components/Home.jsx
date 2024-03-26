// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import heroImage from "../assets/3d3.png";
import notesImage from '../assets/3d8.png';
import doubtImage from '../assets/3d5.png';
import pyqImage from '../assets/3d2.png';

// import Notes from './Components/Notes';
// import Doubt from './Components/Doubt';
// import PYQ from './Components/PYQ';






function Home() {
  return (
    <div>
      <div className="hero" style={{ height: '100vh', width: '100%' }}>
        <div className="hero-text left-text">
          <h1 className="text">New to college?</h1><br />
          <h1 className="text">Exams approaching?</h1><br />
          <h1 className="text">Your one-stop destination for seamless learning</h1><br />
          <h1 className="text">Explore handpicked notes, Clear Your Doubts with AI, with the wisdom of previous year question papers.</h1><br />
        </div>
        <img alt="hero" className="hero-img right-img" src={heroImage} id="3d" />
        <div className="btns" id="hero-btn">
          <Link className="blue-btn" to="/Notes">EXPLORE</Link>
        </div>
      </div>

      <div className="notes" style={{ height: '100vh', width: '100%' }}>
        <div className="note-text right-text">
          <h1 className="text">Looking for quality notes? We've got your back! </h1><br />
          <h1 className="text">Craft top-tier notes with us. Inspired by the best</h1><br />
        </div>
        <img alt="notes" className="note-img left-img" src={notesImage} id="3d" />
        <div className="btns" id="note-btn">
          <Link className="blue-btn" to="/Notes">NOTES</Link>
        </div>
      </div>

      <div className="doubt" style={{ height: '100vh', width: '100%' }}>
        <div className="doubt-text left-text">
          <h1 className="text">Doubts clouding your mind?</h1><br />
          <h1 className="text">Let our AI integrated system help you clear doubts!</h1><br />
          <h1 className="text">Type your questions here and witness the magic.</h1><br />
        </div>
        <img alt="doubt" className="doubt-img right-img" src={doubtImage} />
        <div className="btns" id="doubt-btn">
          <Link className="blue-btn" to="/Doubt">DOUBTS</Link>
        </div>
      </div>

      <div className="PYQ" style={{ height: '100vh', width: '100%' }}>
        <div className="pyq-text right-text">
          <h1 className="text">Unsure about the exam format?</h1><br />
          <h1 className="text">Unlock the power of preparation with our comprehensive repository of past year's question papers!</h1><br />
        </div>
        <img alt="pyq" className="pyq-img left-img" src={pyqImage} />
        <div className="btns" id="PYQ-btn">
          <Link className="blue-btn" to="/PYQ">PYQ</Link>
        </div>
      </div>
{/* 
      <div className="about-us">
        <div className="content">
          <h1 className="title">ABOUT US
            <div className="aurora">
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
            </div>
          </h1>
        </div>

        <div className="container">
          <div className="card card0">
            <div className="border">
              <h2>Soham Vashist</h2>
              <div className="icons">
                <a href="mailto:soham22csu232@ncuindia.edu">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/SohamV8" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/SohamV8_code" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/soham-vashist-34a3b8259/" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="card card1">
            <div className="border">
              <h2>Mrinaal Saini</h2>
              <div className="icons">
                <a href="mailto:mrinaal22csu472@ncuindia.edu">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/Geralt-sys" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="card card2">
            <div className="border">
              <h2>Gagan Lohchab</h2>
              <div className="icons">
                <a href="mailto:gagan22csu227@ncuindia.edu">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/Gagancr77" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/gagan-lohchab-b06814285/" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
