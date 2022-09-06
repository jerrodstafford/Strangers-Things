import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import {
  Posts,
  Account,
  Home
} from './pages';

import {
    Header
} from './components';


const App = () => {


  return (
    <div id="app">
        <Header />
      <Routes>
        <Route path="/home" element={<Home title="Home"/>}></Route>
        <Route path="/posts" element={<Posts title="Posts"/>} ></Route>
        <Route path="/account" element={<Account title="account"/>}></Route>
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