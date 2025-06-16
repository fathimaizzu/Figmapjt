import React from 'react'
import Navbar2 from '../components/Navbar2'
import ServiceSec1 from '../components/Service/ServiceSec1'
import ServiceSec2 from '../components/Service/ServiceSec2'
import ServiceSec3 from '../components/Service/ServiceSec3'

function Service() {
  return (
    <div>
        <Navbar2/> 
      <ServiceSec1/>
      <ServiceSec2/>
        <ServiceSec3/>
    </div>
  )
}

export default Service