import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const nav = useNavigate()
    const [Data,setData] = useState('')
    useEffect(()=>{
        const token = localStorage.getItem('token')
        const interval = setInterval(() => {
            axios.get("",{
                headers:{
                    "authorization": `bearer ${token}`
                }
            })
            .then((res)=>setData(res.data.msg))
            .catch(err=>{
                console.log(err.response.data.msg)
                setTimeout(()=>{
                    return nav("/")
                },1000)
            })
          }, 5000);
        return () => clearInterval(interval);
    },[nav])

  return (
    <>
    <div className='dashboard'>
<h2>HEllo</h2>
        <h1>{Data}</h1>
    </div>
    </>
  )
}

export default Dashboard