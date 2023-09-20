import React from 'react'
import {Routes , Route, BrowserRouter} from 'react-router-dom'
import Register from './Register'
import Logedin from './Logedin'
import Fetch from './Fetch'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Logedin/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Fetch" element={<Fetch/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App