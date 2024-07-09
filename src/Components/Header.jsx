import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FINALPNG from '../assets/FINALPNG.png';
import acc from '../assets/acc.png';
import '../App.css';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="page-header">
      <div className="logo-container">
        <Link to="/App">
          <img alt="logo" src={FINALPNG} className="logo-img" />
        </Link>
      </div>
      <div className="head">
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <Link to="/Notes" onClick={() => setMenuOpen(false)}>NOTES</Link>
          <Link to="/Doubt" onClick={() => setMenuOpen(false)}>DOUBT</Link>
          <Link to="/PYQ" onClick={() => setMenuOpen(false)}>PYQ</Link>
        </nav>
        <a
          href="https://academics.ncuindia.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="acc-link"
        >
          <img alt="acc" className="acc" src={acc} />
        </a>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}

export default Header;
