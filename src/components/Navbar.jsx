import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <div className='flex justify-between px-[50px] items-center'>
     <img src="./assets/Brand.png" alt="Logo" className='w-[160px] h-[80px] ' />
           <div className="w-[500px] flex justify-between text-white">
            <a href="#" >Home</a>
            <Link to={'/Discover'} >Discover</Link>
            <Link to={'Service'} >Services</Link>
            <Link to={'News'} >News</Link>
            <Link to={'About'} >About Us</Link>
            <Link to={'Contact'} >Contact Us</Link>
            
          </div>
          <img src="./assets/Language.png"/>
    </div>
   
  )
}

export default Navbar