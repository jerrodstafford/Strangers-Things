import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import {
  Posts
} from './pages';

import {
    Register,
    Login,
    Header
} from './components';


const BASE_URL = process.env.REACT_APP_BASE_URL;

const App = () => {

  return (
    <div id="app">
        <Header />
        <Register />
        <Login />
        <Posts />
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