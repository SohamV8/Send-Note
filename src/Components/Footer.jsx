import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="paper">
      <mark>
        <span className='foot'>Want to contribute?</span>
        <svg className='footer1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60" preserveAspectRatio="none" stroke="#E8F109">
          <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
        </svg>
        
        <svg className='footer1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60" preserveAspectRatio="none" stroke="#F1FB02">
          <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
        </svg>
      </mark>

      <form>
        <h3 className='infoot'>Your Suggestion :</h3>
        <textarea required type="text" name="text" autoComplete="off" className="input" />
        <button className='btnfoot' type="submit">
          <span className="button_top">Send</span>
        </button>
      </form>

      <mark>
        <div className="social">
          <a href='https://www.linkedin.com/in/soham-vashist-34a3b8259/' target='_blank' rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
          <a href='https://x.com/SohamV8_code' target='_blank' rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
          <a href='https://github.com/SohamV8' target='_blank' rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          <a href='mailto:soham22csu232@ncuindia.com' target='_blank' rel="noopener noreferrer"><i className="fa fa-envelope"></i></a>
        </div>
        
        <svg className='footer1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60" preserveAspectRatio="none" stroke="#E8F109">
          <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
        </svg>
        
        <svg className='footer1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60" preserveAspectRatio="none" stroke="#F1FB02">
          <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
        </svg>
      </mark>
    </div>
  );
};

export default Footer;
