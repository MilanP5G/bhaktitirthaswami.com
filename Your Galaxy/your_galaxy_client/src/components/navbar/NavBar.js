import React from "react";
import { NavLink } from "react-router-dom";
import '../../styling/NavBar.css'
import logo from '../../assets/Samsung_Logo.png'
import devices from '../../assets/Your_Devices.png'
import community from '../../assets/Community.png'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className='nav-logo'>
        <NavLink className="nav-link-logo" to="/">
          <img id="main-logo" alt='Samsung' src={logo} />
        </NavLink>
      </div>
      <div className="nav-group-right">
        <NavLink className="nav-link-phones" to="/phones">
          <img id="your-devices-link" alt='Your Devices' src={devices} />
        </NavLink>
        <NavLink className="nav-link-community" to="/community">
          <img id="community-link" alt='Your Devices' src={community} />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
