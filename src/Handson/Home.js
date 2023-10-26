import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Home = () => {
  const navigate=useNavigate();
const token=localStorage.getItem("token")
console.log(token)
  useEffect(()=>{
if(token){
  axios.get("http://localhost:4001/",{headers:{
    "authorization":`Bearer ${token}`
  }})
  .then(res=>console.log(res.data))
}
else{
  navigate('/login')
}
  },[token,navigate])
  const handler=()=>{
    localStorage.removeItem("token")
    navigate('/login')
  }
  // const data1=token.split(".")[1];
  // const val=window.atob(data1);
  // console.log(val)
  return (
    <div>
    <div className='Homely' style={{textAlign:'center'}}><h1 className='Homelyy'>Welcome to the Page</h1>
    {/* <h1>Hi {val.useremail}</h1> */}
    <h2  className='Homelyy'>You want to Register or Login ....Please select the option accordingly</h2>
    <div className='quote' id='qoutess'>
    Wherever you may go; Life is a beautiful thing. Life is like a passing season. It comes and go. Whatever may come, it's better to enjoy the changing seasons.
    </div>
    <button className='logout' onClick={handler}>logout</button></div>
   
    </div>
  )
}

export default Home