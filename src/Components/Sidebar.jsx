import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem
} from "react-pro-sidebar";
import "react-pro-sidebar/"; // Correct import path if styles are present
import "./Sidebar.css";

function Sidebars() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? "toggled" : ""}`} style={{ height: "100%", position: "absolute" }}>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onToggle={handleToggleSidebar}
        onCollapse={handleCollapsedChange}
      >
        <Menu iconShape="circle">
          {collapsed ? (
            <MenuItem icon={<FiChevronsRight />} onClick={handleCollapsedChange}></MenuItem>
          ) : (
            <MenuItem suffix={<FiChevronsLeft />} onClick={handleCollapsedChange}>
              <div style={{ padding: "9px", fontWeight: "bold", fontSize: 14, letterSpacing: "1px" }}>
                YOUR LOGO!..
              </div>
            </MenuItem>
          )}
          <hr />
          <MenuItem icon={<RiHome4Line />}>Dashboard</MenuItem>
          <SubMenu defaultOpen title="Professors" icon={<RiTeamLine />}>
            <MenuItem icon={<RiUserFollowLine />}>Active</MenuItem>
            <MenuItem icon={<RiUserUnfollowLine />}>Ex Professors</MenuItem>
            <MenuItem icon={<RiCalendar2Line />}>Probation Period</MenuItem>
          </SubMenu>
          <SubMenu defaultOpen title="Records" icon={<RiFolder2Line />}>
            <MenuItem icon={<RiStackLine />}>Senior Students</MenuItem>
            <MenuItem icon={<RiPlantLine />}>Junior Students</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Sidebars;
