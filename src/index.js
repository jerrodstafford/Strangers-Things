import React from 'react';
import { createRoot } from 'react-dom/client';

// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Redirect
// } from 'react-router-dom';

import {
    Posts,
    Register,
    Header
} from './components';


const BASE_URL = process.env.REACT_APP_BASE_URL;

const App = () => {

  return (
    <div id="app">
      <h3>Stranger's Things</h3>
        <Register />
        <Header />
        <Posts />
      </div>
  )

}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);