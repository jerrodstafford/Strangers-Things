import React, { useEffect, useState } from "react";

import {
  getUserToken,
  storeUserToken,
  storeUserCredentials
}
from '../auth'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {

    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [userToken, setUserToken] = useState(getUserToken);

  const userLogin = async (uName, pWord) => {
    const userCredentials = { username: uName, password: pWord }
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
         user: userCredentials 
      })
    });
    const result = await response.json();
    console.log(result)
    const webToken = result.data.token;
    setUserToken(webToken);
  } catch(error) {throw error}
  }  

  const handleSubmit = async(event) => {
    event.preventDefault();
      await userLogin(usernameLogin, passwordLogin);
    }
  const handleLogin = () => {
    storeUserToken(userToken);
    storeUserCredentials(usernameLogin, passwordLogin)
  }
  

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" value={usernameLogin} onChange={(event) => {
          setUsernameLogin(event.target.value);}} placeholder="Username" minLength={7} required />
        <label>Password: </label>
        <input type="text" value={passwordLogin} onChange={(event) => {
          setPasswordLogin(event.target.value);}} placeholder="Password" minLength={7} required />
        <button type="submit" onClick={ handleLogin }>LOGIN</button>
      </form>
    </div>
  )
}
export default Login;