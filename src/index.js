import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


import App from './App.js';
import User from './components/User/User.js';
import Admin from './components/Admin/Admin.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider>

  // </Provider>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/users" element={<User />} />
        <Route path="/admins" element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
