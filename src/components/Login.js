import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { userLogin } from "../api";

import './Login.css';


const Login = ({ 
          usernameLogin, setUsernameLogin,
          passwordLogin, setPasswordLogin,
               }) => {


let navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
      await userLogin(usernameLogin, passwordLogin);
      navigate("/home");
    }

    const handleLogin = () => {
      localStorage.setItem('username', usernameLogin);
    }


  return (
    <div className="login-form">
      <h1> Sign In</h1>
      <br/>
      <form className="input-container" onSubmit={handleSubmit}>
      <div className="input-container-username">
        <label>Username </label>
        <input type="text" value={usernameLogin} onChange={(event) => {
          setUsernameLogin(event.target.value);}} placeholder="Username" minLength={7} required />
      </div>
      <div className="input-container-password">
        <label>Password </label>
        <input type="password" value={passwordLogin} onChange={(event) => {
          setPasswordLogin(event.target.value);}} placeholder="Password" minLength={7} required />
      </div>
      <div className="button-container">
        <button className="input-container-button" type="submit" onClick={ handleLogin }>LOGIN</button>
      </div>
      </form>
      <br/>
      <Link to="/register"> Not a registered user? Click here to sign up! </Link>
    </div>
  )
}
export default Login;