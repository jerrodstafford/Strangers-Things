import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Header = () => {

    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [userToken, setUserToken] = useState('');

  const userLogin = async (uName, pWord) => {
  try {
    const userCredentials = { username: uName, password: pWord }
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
         user: userCredentials 
      })
    });
    const result = await response.json();
    console.log(result)
    const userToken = result.data.token;
    setUserToken(userToken);
    localStorage.setItem('userToken', userToken);
  } catch(error) {throw error}
  }  

  const handleSubmit = async(event) => {
    event.preventDefault();
      await userLogin(usernameLogin, passwordLogin);
    }

  return (
    <div className="login-page">
      <h1>WELCOME, PLEASE LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" value={usernameLogin} onChange={(event) => {
          setUsernameLogin(event.target.value);}} placeholder="Username" minLength={7} required />
        <label>Password: </label>
        <input type="text" value={passwordLogin} onChange={(event) => {
          setPasswordLogin(event.target.value);}} placeholder="Password" minLength={7} required />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  )
}
export default Login;