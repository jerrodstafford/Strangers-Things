import React from "react";
import { NavLink } from "react-router-dom";

import {
  clearUserToken
} from '../auth';


import './Header.css';

const Header = () => {

  const handleLogout = () => {
    clearUserToken();
  }

  return (
    <header>
      <h1>STRANGER'S THINGS</h1>
        <nav>
      { 
          !localStorage.getItem('userToken')
      ? <>
          <NavLink to="/home"> Home </NavLink>
          <NavLink to="/posts"> Posts </NavLink>
          <NavLink to="/login"> Login </NavLink>
          <NavLink to="/register"> Register </NavLink>
        </>
      :  <>
          <NavLink to="/home"> Home </NavLink>
          <NavLink to="/profile"> Profile </NavLink>
          <NavLink to="/posts"> Posts </NavLink>
          <NavLink to="/home" onClick={ handleLogout }> Logout </NavLink>
        </>
      }
        </nav>
    </header>
  )
}
export default Header;