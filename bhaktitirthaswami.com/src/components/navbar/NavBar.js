import React from 'react';
import { NavLink } from 'react-router-dom';
import btswamiLogo from '../../assets/BTSwamiLogo.png'
import '../../styling/navbar.css';

const NavBar = () => {

  return (
    <div className='nav-bar'>
      <div className='nav-logo'>
        <img alt='B.T.Swami' src={btswamiLogo} />
      </div>
      <div className='nav-links'>
        <NavLink className="nav-about" to="/">
          About
        </NavLink>
      </div>
    </div>
  )

}

export default NavBar;
