import React from "react";

import { storeUserCredentials } from '../auth'

import { userRegistration } from "../api";

const Register = ({
          createUsername, setCreateUsername,
          createPassword, setCreatePassword,
          confirmPassword, setConfirmPassword
                  }) => {


  const handleSubmit = async(event) => {
    event.preventDefault();
    if(createPassword !== confirmPassword) {
      alert('Passwords Do Not Match'); return;}
      await userRegistration(createUsername, createPassword);
    }

    const handleRegistration = () => {
      // storeUserToken(userToken);
      storeUserCredentials(createUsername, createPassword)
    }


  return (
    <div className="registration-page">
      <h1>New User?</h1>
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
        <button type="submit" onClick={ handleRegistration }>REGISTER</button>
      </form>
    </div>
  )
}
export default Register;

