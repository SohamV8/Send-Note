import React from 'react';
import { Link } from 'react-router-dom';
import FINALPNG from '../assets/FINALPNG.png';
import acc from '../assets/acc.png';
import '../App.css';
import './header.css';

function Header() {
  return (
    <div>
      <header className="page-header">
        <Link to="/Notes">
          <div className="logo">
          <Link to="/App"><img alt="logo" src={FINALPNG} className="logo-img" /></Link>
          </div>
        </Link>
        <div className="head">
          <nav className="navbar">
            <Link to="/Notes">NOTES</Link>
            <Link to="/Doubt">DOUBT</Link>
            <Link to="/PYQ">PYQ</Link>
          </nav>
          <a
            href="https://academics.ncuindia.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="acc" className="acc" src={acc} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
