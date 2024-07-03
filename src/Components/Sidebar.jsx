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
            <i className="fa fa-graduation-cap"></i>
            <span>1st Year</span>
            <i className={`arrow ${activeMenu === 1 ? 'down' : 'right'}`}></i>
          </a>
          <ul className={`submenu ${activeMenu === 1 ? 'expanded' : ''}`}>
            <li><a href="#">Engineering Graphics Design</a></li>
            <li><a href="#">Physics</a></li>
            <li><a href="#">Chemistry</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="#" onClick={() => handleSubMenuToggle(2)}>
            <i className="fa fa-graduation-cap"></i>
            <span>2nd Year</span>
            <i className={`arrow ${activeMenu === 2 ? 'down' : 'right'}`}></i>
          </a>
          <ul className={`submenu ${activeMenu === 2 ? 'expanded' : ''}`}>
            <li><a href="#">EWA</a></li>
            <li><a href="#">ADA</a></li>
            <li><a href="#">DBMS</a></li>
            <li><a href="#">CS</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="#" onClick={() => handleSubMenuToggle(3)}>
            <i className="fa fa-graduation-cap"></i>
            <span>3rd Year</span>
            <i className={`arrow ${activeMenu === 3 ? 'down' : 'right'}`}></i>
          </a>
          <ul className={`submenu ${activeMenu === 3 ? 'expanded' : ''}`}>
            <li><a href="#">Engineering Graphics Design</a></li>
            <li><a href="#">Physics</a></li>
            <li><a href="#">Chemistry</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="#" onClick={() => handleSubMenuToggle(4)}>
            <i className="fa fa-graduation-cap"></i>
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
