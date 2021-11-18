import React, { useState } from 'react';
import './style.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Pages/Home'
import axios from 'axios';

export default function App() {
  function handleLogin() {
    axios.get();
  }

  return (
    <div>
      
      <Home/>
      {/* <Login handleLogin={handleLogin}/> */}
      <SignUp />
    </div>
  );
}
