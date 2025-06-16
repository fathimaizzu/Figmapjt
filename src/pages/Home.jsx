import React from 'react'

import Navbar from '../components/Navbar';

import SecondSec from '../components/SecondSec';
import Card from '../components/Card'
import Card2 from '../components/card2';
import Final from '../components/Final';




function Home () {
  return (
    <div>
    
   
    <div className="w-full h-full BgImg">
      <Navbar/>
       <div className=" w-[100%] mt-[200px]" >
      <h1 className='text-white text-[48px] text-center '>
        Explore the world with a smile
      </h1>
      <div className='text-white text-center text-[16px] mt-[20px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet <br/>luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim<br/> praesent elementum facilisis leo,
      </div>
      </div>
     <div className="flex justify-center  ">
      <div className="w-[780px] h-[67px] bg-white flex items-center px-[15px] mt-[65px] rounded-md not-optional:">
         <img src="./assets/Frame.png" alt="map" className="size-6 "/>
         <div className=" w-full flex justify-between">
       <div className='pl-[20px]'> City or Destination</div>
       <div className='border-l-[2px] border-l-[#3D3E48] pl-[8px]'>Date of stay</div>
       <div className='border-l-[2px] border-l-[#3D3E48] pl-[8px]'>person</div>
      </div>
      <button className="bg-[#43B97F] w-[250px] h-[49px] flex px-[10px] text-white items-center justify-between rounded-md ml-[82px] text-[16px]">Find Trip Now
      <img src="./assets/vector.png" className="w-[24px] h-[24px]"/>
      </button>
</div>
      </div> 
      
    </div>
     <SecondSec/>
      <Card2/>
      {/* <Final/> */}


    </div>
    

  )
}
 
export default Home;