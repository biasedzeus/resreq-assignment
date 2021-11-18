import React,{useState} from 'react';



const Login = ( {handleLogin}) =>{
  

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
 


  return(
    <div>
      <h1>Login Page</h1>
      <label htmlFor="name">Name</label>
      <br/>
      <input
       type="text" 
       placeholder ="Enter Name"
       value = {email}
       onChange = {(e =>setEmail( e.target.value))}/>
      <br/>
      <label htmlFor="name">Name</label>
      <br/>
      <input type="password" 
      placeholder ="Enter password"/>

     <br/>
      <button
       className="login-button"
       onClick={handleLogin}
       >Login</button>
    </div>
  )
}


export default Login ;