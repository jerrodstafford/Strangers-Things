import React from "react";

import { storeUserCredentials } from '../auth'

import { userLogin } from "../api";


const Login = ({ 
          usernameLogin, setUsernameLogin,
          passwordLogin, setPasswordLogin,
               }) => {


  const handleSubmit = async(event) => {
    event.preventDefault();
      await userLogin(usernameLogin, passwordLogin);
    }
  const handleLogin = () => {
    storeUserCredentials(usernameLogin, passwordLogin)
  }
  

  return (
    <div className="login-form">
      <h1>Please, log in</h1>
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