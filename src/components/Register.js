import React from "react";
import { useNavigate } from "react-router-dom";

import { userRegistration } from "../api";

import './Register.css';


const Register = ({
          createUsername, setCreateUsername,
          createPassword, setCreatePassword,
          confirmPassword, setConfirmPassword
                  }) => {


  let navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    if(createPassword !== confirmPassword) {
      alert('Passwords Do Not Match'); return;}
      await userRegistration(createUsername, createPassword);
      navigate("/home");
    }

    const handleRegistration = () => {
      localStorage.setItem('username', createUsername);
      // useNavigate??
    }


  return (
    <div className="registration-page">
      <h1>New User? Sign Up</h1>
      <br/>
      <form className="input-container" onSubmit={handleSubmit}>
      <div className="create-user">
        <label>Create Username</label>
        <input type="text" value={createUsername} onChange={(event) => {
          setCreateUsername(event.target.value);}} placeholder="Username" minLength={7} required />
      </div>
      <div className="create-password">
        <label>Create Password</label>
        <input type="password" value={createPassword} onChange={(event) => {
          setCreatePassword(event.target.value);}} placeholder="Password" minLength={7} required />
      </div>
      <div className="confirm-password">
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={(event) => {
          setConfirmPassword(event.target.value);}} placeholder="Confirm Password" minLength={7} required/>
      </div>
      <div className="button-container">
        <button className="register-button" type="submit" onClick={ handleRegistration }>REGISTER</button>
      </div>
      </form>
    </div>
  )
}
export default Register;

