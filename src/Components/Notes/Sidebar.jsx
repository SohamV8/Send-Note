import React, { useState } from 'react';
import './Sidebar.css'; // Import your custom styles here

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null); // State to track active menu item

  // Function to handle submenu toggle
  const handleSubMenuToggle = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null); // Collapse if clicked again
    } else {
      setActiveMenu(index); // Expand clicked submenu
    }
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sub-menu">
          <a href="#" onClick={() => handleSubMenuToggle(1)}>
            <span>1st Year</span>
            <i className={`arrow ${activeMenu === 1 ? 'down' : 'right'}`}></i>
          </a>
          <ul className={`submenu ${activeMenu === 1 ? 'expanded' : ''}`}>
            <li><a href="#">Engineering Graphics Design</a></li>
            <li><a href="#">Physics</a></li>
            <li><a href="#">Chemistry</a></li>
            <li><a href="#">Basic of Mechanical Engineering</a></li>
            <li><a href="#">Basics of Electrical & Electronics Engineering</a></li>
            <li><a href="#">Effective Communication-I</a></li>
            <li><a href="#">Effective Communication-II</a></li>
            <li><a href="#">FOCP-I</a></li>
            <li><a href="#">FOCP-II</a></li>
            <li><a href="#">FOCP-I</a></li>
            <li><a href="#">FOCP-II</a></li>
            <li><a href="#">Mathematics-I</a></li>
            <li><a href="#">Mathematics-II</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="#" onClick={() => handleSubMenuToggle(2)}>
            <span>2nd Year</span>
            <i className={`arrow ${activeMenu === 2 ? 'down' : 'right'}`}></i>
          </a>
          <ul className={`submenu ${activeMenu === 2 ? 'expanded' : ''}`}>
            <li><a href="#">Computer Networks</a></li>
            <li><a href="#">Data Structures</a></li>
            <li><a href="#">DE&CA</a></li>
            <li><a href="#">Discrete Mathematics</a></li>
            <li><a href="#">ENTERPRISE WEB APPLICATION</a></li>
            <li><a href="#">MiddleWare Framework</a></li>
            <li><a href="#">Entrepreneur</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="#" onClick={() => handleSubMenuToggle(3)}>
            <span>3rd Year</span>
            <i className={`arrow ${activeMenu === 3 ? 'down' : 'right'}`}></i>
          </a>
          <ul className={`submenu ${activeMenu === 3 ? 'expanded' : ''}`}>
            <li><a href="#">Web Frameworks</a></li>
            <li><a href="#">No SQL Databases</a></li>
            <li><a href="#">Introduction to AI&ML</a></li>
            <li><a href="#">Human Values & Professional Ethics</a></li>
            <li><a href="#">Operating System</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="#" onClick={() => handleSubMenuToggle(4)}>
            <span>4th Year</span>
            <i className={`arrow ${activeMenu === 4 ? 'down' : 'right'}`}></i>
          </a>
          <ul className={`submenu ${activeMenu === 4 ? 'expanded' : ''}`}>
            <li><a href="#">Engineering Graphics Design</a></li>
            <li><a href="#">Physics</a></li>
            <li><a href="#">Chemistry</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
