import logo from '../assets/Brand.png';
import React from 'react'

function Navbar() {
  return (
   <div className='flex justify-between px-[50px] items-center'>
     <img src={logo} alt="Logo" className='w-[160px] h-[80px] ' />
           <div className="w-[500px] flex justify-between text-white">
            <a href="#" >Home</a>
            <a href="#" >Discover</a>
            <a href="#" >Services</a>
            <a href="#" >News</a>
            <a href="#" >About Us</a>
            <a href="#" >Contact</a>
          </div>
          <img src="./src/assets/Language.png"/>
    </div>
   
  )
}

export default Navbar