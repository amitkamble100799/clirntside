import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./App.css"

const Signup = () => {
  const nav = useNavigate()
  const [User,setUser] = useState({
    name: "",
    phone: "",
    email:    "",
    password: "",
  })
  const Userhandle=(e)=>{
    setUser({...User,[e.target.name]:e.target.value})
  }
  const [Message,setMessage] = useState("")
  const register = (e)=>{
    e.preventDefault();
    axios.post("https://amit-kamble.onrender.com/url/register",User)
    .then(res=>{
      console.log(res.data.msg)
      setMessage(res.data.msg)
      if(res.data.token){
        setTimeout(()=>{
          nav("/")
        },1500)
      }
    })
    .catch(err=>console.log(err.response.data.msg))
  }
  return (
    <div className='Page signup'>
      <h1>Welcome to<br/>Register Page</h1>
        <form onSubmit={register}>
          <div className="form-floating mb-3">
            <input name='name' onChange={Userhandle} type="text" className="form-control" id="Nm" placeholder="Username"/>
            <br></br><label htmlFor="Nm">Enter Username</label>
          </div>
          <div className="form-floating mb-3">
            <input name='phone' onChange={Userhandle} type="number" className="form-control" id="ph" placeholder="Phone Number"/>
            <br></br><label htmlFor="ph">Enter Your Phone Number</label>
          </div>
          <div className="form-floating mb-3">
           <input name='email' onChange={Userhandle} type="email" className="form-control" id="eml" placeholder="name@example.com"/>
           <br></br><label htmlFor="eml">Email address</label>
          </div>
          <div className="form-floating">
            <input name='password' onChange={Userhandle} type="password" className="form-control" id="pwd" placeholder="Password"/>
            <br></br><label htmlFor="pwd">Password</label>
          </div>
          {
            Message ? <div id="emailHelp" className="form-text">{Message}</div> : ""
          }
        <button type='submit'>Submit</button>
        </form>
      <p className='bottom_msg singup_btm' onClick={()=>nav("/")}>Already have an account? Go to Login</p>
    </div>
  )
}

export default Signup