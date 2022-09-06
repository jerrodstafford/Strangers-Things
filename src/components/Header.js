import React from "react";
import { Link } from "react-router-dom";

import {
  clearUserInfo
} from '../auth';

const Header = () => {

  const handleLogout = () => {
    clearUserInfo();
  }

  return (
    <div id="header-nav">
      <h1>STRANGER'S THINGS</h1>
        <nav id="header-links">
      { 
          !localStorage.getItem('userToken')
      ? <>
          <Link to="/home"> Home </Link>
          <Link to="/posts"> Posts </Link>
          <Link to="/login"> Login </Link>
          <Link to="/register"> Register </Link>
        </>
      :  <>
          <Link to="/home"> Home </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/posts"> Posts </Link>
          <Link to="/home" onClick={ handleLogout }> Logout </Link>
        </>
      }
        </nav>
    </div>
  )
}
export default Header;