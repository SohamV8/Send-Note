import React, { useState } from 'react';
import './Sidebar.css'; // Import your custom styles here

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = () => {
    setToggled(!toggled);
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${toggled ? 'toggled' : ''}`}>
      <ul className="sidebar-nav">


        <li className="sub-menu">
          <a href="#" onClick={handleToggleSidebar}>
            <i className="fa fa-graduation-cap"></i>
            <span>1st Year</span>
            <i className={`arrow ${collapsed ? 'down' : 'right'}`}></i> {/* Arrow icon */}
          </a>
          <ul className={collapsed ? 'collapsed' : ''}>
            <li><a href="#">Engineering Graphics Design</a></li>
            <li><a href="#">Physics</a></li>
            <li><a href="#">Chemistry</a></li>
          </ul>
        </li>
        <li className="sub-menu">
          <a href="#" onClick={handleToggleSidebar}>
            <i className="fa fa-graduation-cap"></i>
            <span>2nd Year</span>
            <i className={`arrow ${collapsed ? 'down' : 'right'}`}></i> {/* Arrow icon */}
          </a>
          <ul className={collapsed ? 'collapsed' : ''}>
            <li><a href="#">EWA</a></li>
            <li><a href="#">ADA</a></li>
            <li><a href="#">DBMS</a></li>
            <li><a href="#">CS</a></li>
          </ul>
        </li>
        
        <li className="sub-menu">
          <a href="#" onClick={handleToggleSidebar}>
            <i className="fa fa-graduation-cap"></i>
            <span>3rd Year</span>
            <i className={`arrow ${collapsed ? 'down' : 'right'}`}></i> {/* Arrow icon */}
          </a>
          <ul className={collapsed ? 'collapsed' : ''}>
            <li><a href="#">Engineering Graphics Design</a></li>
            <li><a href="#">Physics</a></li>
            <li><a href="#">Chemistry</a></li>
          </ul>
        </li>

        <li className="sub-menu">
          <a href="#" onClick={handleToggleSidebar}>
            <i className="fa fa-graduation-cap"></i>
            <span>4th Year</span>
            <i className={`arrow ${collapsed ? 'down' : 'right'}`}></i> {/* Arrow icon */}
          </a>
          <ul className={collapsed ? 'collapsed' : ''}>
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
