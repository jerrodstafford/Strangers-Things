import React from "react";
import { NavLink } from "react-router-dom";


import './Home.css';

const Home = () => {

    return (
      <div className="home-page">
      { 
          !localStorage.getItem('userToken')
      ? <>
          <h1>Welcome to Stranger's Things</h1>
          <br/>
          <span>
          <br/>
          <NavLink to="/login" >Log in</NavLink>
          <NavLink to="/register" >Sign up</NavLink>
          <NavLink to="/posts" >View posts</NavLink>
          
          </span>
        </>
      :  <>
          <h1>Welcome { localStorage.getItem('username') }</h1>
          <br/>
          <NavLink to="/profile" >View Profile</NavLink>
          <NavLink to="/posts" >View posts</NavLink>
        </>
      }
      </div>
    )
  }
  export default Home;