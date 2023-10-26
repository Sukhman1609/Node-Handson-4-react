import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { NavLink } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate(); 

  const [logindata, setlogindata] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    console.log('Login Logic:', logindata);
      e.preventDefault()
  axios.post('https://page-node.onrender.com/api/login',logindata)
  .then((res)=>{alert(res.data.msg);
    localStorage.setItem("token",res.data.token)
    navigate('/');})
  .catch(err=>console.error(err))   
    
  };

  return (
    <div>
    <div  className='logins' style={{textAlign:'center'}}>
      <h1>Login Form</h1>
      <label>
        Email:
        <input
          type="text"
          value={logindata.email}
          onChange={(e) => setlogindata({ ...logindata, email: e.target.value })}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={logindata.password}
          onChange={(e) => setlogindata({ ...logindata, password: e.target.value })}
        />
      </label>
      <br />
      <button className='down' onClick={handleLogin}>Login</button>
      <br />
      <p>
          Create an account? <NavLink to='/register'>Register here</NavLink>.
        </p>
    </div>
    <div className='quote'>
    Wherever you may go; Life is a beautiful thing. Life is like a passing season. It comes and go. Whatever may come, it's better to enjoy the changing seasons.
    </div>
    </div>
  );
};

export default Login;
