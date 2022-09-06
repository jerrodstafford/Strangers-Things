import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Posts, Home } from './pages';

import { Header, Login, Register } from './components';

import { getAllPosts, userLogin, userRegistration } from './api';


const App = () => {

  const [allPosts, setAllPosts] = useState([]);
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [createUsername, setCreateUsername] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userToken, setUserToken] = useState('');


  useEffect(() => {
      getAllPosts()
        .then(listAllPosts => {
            setAllPosts(listAllPosts)
        })
        .catch(error => {
          console.error(error);
        });
  }, []);

  // useEffect(() => {
  //     userLogin(usernameLogin, passwordLogin)
  //       .then(webToken => {
  //         setUserToken(webToken);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });

  //     userRegistration(createUsername, createPassword)
  //       .then(webToken => {
  //         setUserToken(webToken)
  //       })
  //       .catch(error => {
  //         console.error(error)
  //       });
  // }, []);


  return (
    <div id="app">
        <Header />
      <Routes>
        <Route path="/home" element={<Home title="Home"/>}></Route>
        <Route path="/posts" element={<Posts allPosts={ allPosts } setAllPosts={ setAllPosts } title="Posts"/>} ></Route>
        <Route path="/login" element={<Login
                  usernameLogin={ usernameLogin } setUsernameLogin={ setUsernameLogin }
                  passwordLogin={ passwordLogin } setPasswordLogin={ setPasswordLogin} />} >
        </Route>
        <Route path="/register" element={<Register
                  createUsername={ createUsername } setCreateUsername={ setCreateUsername }
                  createPassword={ createPassword } setCreatePassword={ setCreatePassword }
                  confirmPassword={ confirmPassword } setConfirmPassword={ setConfirmPassword } />} >
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