import React, {useState} from 'react';
import './LoginForm.css';

function LoginForm() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  return (
    <div className="login-page">
      <img className="icon" alt="" src="../-6@2x.png" />
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Email:</label>
        <input type="email" id="username" name="username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='sign-in' type="submit">sign in</button>
        <button className= 'register' type="submit">register</button>
        <p >forgot password?</p>

      </form>
    </div>
  );
}

export default LoginForm;
