import React from 'react';
import './Footer.css';
import FINALPNG from '../assets/FINALPNG.png';
import tornlast from '../assets/tornlast.png';
import Highlighter from './Highlighter';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
  };

  return (
    <>
      <img src={tornlast} alt='torn paper' className='last-torn' />
      <div className="paper">
        <Highlighter>
          <span className='foot'>Want to contribute?</span>
        </Highlighter>

        <form onSubmit={handleSubmit}>
          <Highlighter>
            <h3 className='infoot'>Your Suggestion :</h3>
          </Highlighter>
          <textarea required type="text" name="text" autoComplete="off" className="input" aria-label="Your Suggestion" />
          <button className='btnfoot' type="submit">
            <span className="button_top">Send</span>
          </button>
        </form>

        <div className="social">
          <Highlighter>
            <a href='https://www.linkedin.com/in/soham-vashist-34a3b8259/' target='_blank' rel="noopener noreferrer" aria-label="LinkedIn Profile"><i className="fa fa-linkedin"></i></a>
          </Highlighter>
          <Highlighter>
            <a href='https://x.com/SohamV8_code' target='_blank' rel="noopener noreferrer" aria-label="Twitter Profile"><i className="fa fa-twitter"></i></a>
          </Highlighter>
          <Highlighter>
            <a href='https://github.com/SohamV8' target='_blank' rel="noopener noreferrer" aria-label="GitHub Profile"><i className="fa fa-github"></i></a>
          </Highlighter>
          <Highlighter>
            <a href='mailto:soham22csu232@ncuindia.com' target='_blank' rel="noopener noreferrer" aria-label="Email"><i className="fa fa-envelope"></i></a>
          </Highlighter>
        </div>
        
        <img src={FINALPNG} alt='logo' className='lastimg' />
      </div>
    </>
  );
};

export default Footer;
