import React from "react";

import { 
    Login,
    Register
 } from "../components";

 const Account = () => {

    return (
      <div id="account">
        <h1>Please, log in</h1>
        <Login />
        <br />
        <h1>New User?</h1>
        <Register />
      </div>
    )
 }
 export default Account;