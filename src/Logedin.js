import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./App.css"

const Login = () => {
    const nav = useNavigate()
    const [User,setUser] = useState({
        email:    "",
        password: "",
    })
    const [Message,setMessage] = useState("")
    const handleUser = (e)=>{
        setUser({...User,[e.target.name]:e.target.value})
    }
    const login = async(e)=>{
      e.preventDefault();
    //   localStorage.clear()
      await axios.post("https://amit-kamble.onrender.com/url/login",User)
      .then(res=>{
        console.log(res.data)
        setMessage(res.data.msg)
        if(res.data.token){
          setTimeout(()=>{
            nav('/Fetch')
          },1500)
        }
      })
      .catch(err=>console.log(err.response.data.msg))
    }
  return (
    <div className='Page'>
      <h1>Welcome <br/> Login page</h1>
      <form onSubmit={login}>
        <div className="form-floating mb-3">
          <input name='email' onChange={handleUser} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
         <br/> <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input name='password' onChange={handleUser} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
         <br></br> <label htmlFor="floatingPassword">Password</label>
        </div>
        {
          Message ? <div id="emailHelp" className="form-text">{Message}</div> : ""
        }
        <button type='submit'>Submit</button>
      </form>
      <p className='bottom_msg' onClick={()=>nav("/Register")}>Don't have an account? Sign Up</p>
    </div>
  )
}

export default Login