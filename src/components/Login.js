import React, { useEffect, useState } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {
    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

  const userLogin = async (uName, pWord) => {
  try {
    const userLogin = { username: uName, password: pWord }
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
         user: userLogin 
      })
    });
    const result = await response.json()
    console.log(result)
  } catch(error) {throw error}
  }  

  const handleSubmit = async(event) => {
    event.preventDefault();
      await userLogin(createUsername, createPassword);
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