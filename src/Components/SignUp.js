import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const PostURL = 'https://reqres.in/api/register';

const SignUp = () => {
  const [email, setEmail] = useState('a@test.com');
  const [password, setPassword] = useState('123');

//  async function handleRegister(e) {
//     e.preventDefault();

//      await axios({
//         method: 'get',
//         url: 'https://reqres.in/api/users',
       
//       })
//       .then(function(response){
//         console.log(response);
//         return response.data;
//       }).catch(function (error){
//         console.log(error)
//       })
      
//       ;
//   }

  async function handleRegister(e) {
    e.preventDefault();
  
    await  axios
      .post(PostURL, {
        "email":email,
        "password":password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  return (
    <div>
      <h1>SignUp Page</h1>
      <label htmlFor="name">Email</label>
      <br />
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <label htmlFor="name">Name</label>
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button className="login-button" onClick={handleRegister}>
        Login
      </button>
    </div>
  );
};

export default SignUp;
