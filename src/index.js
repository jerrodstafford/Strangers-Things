import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Posts } from './pages';

import { Header, Login, Register, Home } from './components';


const App = () => {

  const [allPosts, setAllPosts] = useState([]);
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [createUsername, setCreateUsername] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <div id="app">
        <Header />
      <Routes>
        <Route path="/home" element={<Home title="Home"/>}></Route>
        <Route path="/posts" element={<Posts allPosts={ allPosts } setAllPosts={ setAllPosts } title="Posts"/>} ></Route>
        <Route path="/login" element={<Login
                  usernameLogin={ usernameLogin } setUsernameLogin={ setUsernameLogin }
                  passwordLogin={ passwordLogin } setPasswordLogin={ setPasswordLogin} title="Login" />} >
        </Route>
        <Route path="/register" element={<Register
                  createUsername={ createUsername } setCreateUsername={ setCreateUsername }
                  createPassword={ createPassword } setCreatePassword={ setCreatePassword }
                  confirmPassword={ confirmPassword } setConfirmPassword={ setConfirmPassword } title="Register" />} >
        </Route>
      </Routes>
    </div>
  )

}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
<Router>
  <App />
</Router>
);