import React, {useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate();

  const onRegisterClick = useCallback(()=>{
    navigate('../register')
  }, [navigate])

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
        <button className= 'register' onClick = {onRegisterClick} type="submit">register</button>
        <p >forgot password?</p>

      </form>
    </div>
  );
}

export default LoginForm;
