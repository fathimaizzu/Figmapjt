import React, { useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import Final from './components/Final';
import { useNavigate } from 'react-router-dom';




function App() {
  const navigate=useNavigate()
  useEffect (()=>{
    navigate("/Home");

  },[navigate])
  return (
    <div>

      <Outlet />
<Final/>


    </div>


  )
}

export default App;