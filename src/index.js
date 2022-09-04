import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



import {
    Posts,
    Register,
    Header
} from './components';


const BASE_URL = process.env.REACT_APP_BASE_URL;

const App = () => {

  return (
    <div id="app">
        <Register />
        <Header />
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