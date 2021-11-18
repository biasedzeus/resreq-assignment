import React, { useState } from 'react';
import './style.css';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import axios from 'axios';

export default function App() {
  function handleLogin() {
    axios.get();
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      {/* <Login handleLogin={handleLogin}/> */}
      <SignUp />
    </div>
  );
}
