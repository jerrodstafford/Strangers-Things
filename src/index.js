import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Redirect
// } from 'react-router-dom';

import {
    Posts,
    Register
} from './components';

// import {
//   getAllPosts
// } from './api'



const App = () => {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const getResult = async() => {
      await getAllPosts();
    }

    getResult();
  }, []);

  const getAllPosts = async() => {
  try{  
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    const listAllPosts = result.data.posts;
    setAllPosts(listAllPosts);
    } catch(error) {throw error}
  }

  return (
      <div id="app">
        <div className="header">
        <h3>Stranger's Things</h3>
        <nav>
          <span>HOME</span>
          <span>POSTS</span>
          <span>PROFILE</span>
          <span>LOGIN/LOGOUT</span>
        </nav>
        </div>
        <Register />
        <Posts
          allPosts={ allPosts }  />
        <div>
          <div className="account-page">
            <h2></h2>

          </div>
        </div>
      </div>
  )

}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);