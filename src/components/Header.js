import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  clearUserInfo
} from '../auth';


import './Header.css';

const Header = () => {


let navigate = useNavigate();

  const handleLogout = () => {
    clearUserInfo();
    navigate("/");
  }

  return (
    <header>
      <h1>STRANGER'S THINGS</h1>
        <nav>
      { 
          !localStorage.getItem('userToken')
      ? <>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/posts"> Posts </NavLink>
          <NavLink to="/login"> Login </NavLink>
          <NavLink to="/register"> Register </NavLink>
        </>
      :  <>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/profile"> Profile </NavLink>
          <NavLink to="/posts"> Posts </NavLink>
          <NavLink to="/" onClick={ handleLogout }> Logout </NavLink>
        </>
      }
        </nav>
    </header>
  )
}
export default Header;