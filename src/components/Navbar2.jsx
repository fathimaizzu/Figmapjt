import React from 'react'
import { Link } from 'react-router-dom'

function Navbar2() {
  return (
   <div className='flex justify-between px-[50px] items-center'>
    <h1 className='text-[#295943] text-[40px]'> travelaja</h1>
           <div className="w-[500px] flex justify-between text-black">
            <a href="#" >Home</a>
            <Link to={'/Discover'} >Discover</Link>
                       <Link to={'/Service'} >Services</Link>
                       <Link to={'/News'} >News</Link>
                       <Link to={'/About'} >About Us</Link>
                       <Link to={'/Contact'} >Contact Us</Link>
          </div>
          <img src="./assets/Language.png"/>
    </div>
   
  )
}

export default Navbar2