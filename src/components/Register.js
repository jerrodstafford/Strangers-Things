import React, { useEffect, useState } from "react";

import {
  storeUserToken,
  storeUserCredentials,
  getUserToken
}
from '../auth'

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Register = () => {

  const [createUsername, setCreateUsername] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userToken, setUserToken] = useState(getUserToken);

  const userRegistration = async (newUsername, newPassword) => {
  try {
    const userLogin = { username: newUsername, password: newPassword }
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
         user: userLogin 
      })
    });
    const result = await response.json()
    const webToken = result.data.token;
    setUserToken(webToken);
  } catch(error) {throw error}
  }  

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(createPassword !== confirmPassword) {
      alert('Passwords Do Not Match'); return;}
      await userRegistration(createUsername, createPassword);
    }

    const handleLogin = () => {
      storeUserToken(userToken);
      storeUserCredentials(createUsername, createPassword)
    }
    
  return (
    <div className="registration-page">
      <form onSubmit={handleSubmit}>
        <label>Create Username</label>
        <input type="text" value={createUsername} onChange={(event) => {
          setCreateUsername(event.target.value);}} placeholder="Username" minLength={7} required />
        <label>Create Password</label>
        <input type="text" value={createPassword} onChange={(event) => {
          setCreatePassword(event.target.value);}} placeholder="Password" minLength={7} required />
        <label>Confirm Password</label>
        <input type="text" value={confirmPassword} onChange={(event) => {
          setConfirmPassword(event.target.value);}} placeholder="Confirm Password" minLength={7} required/>
        <button type="submit" onClick={ handleLogin }>REGISTER</button>
      </form>
    </div>
  )
}
export default Register;

