import React from "react";
import { Link } from "react-router-dom";


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
          <Link to="/login" >Click here to log in</Link>
          <Link to="/register" >Click here to sign up</Link>
          </span>
        </>
      :  <>
          <h1>Welcome { localStorage.getItem('username') }</h1>
        </>
      }
      </div>
    )
  }
  export default Home;