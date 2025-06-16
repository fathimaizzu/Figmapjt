import React from 'react'

function Final() {
  return (
    <div className='bg-[#295943] w-full h-[447px] text-white mt-20'>
 
      <div className='px-[50px] grid grid-cols-4 pt-15 pl-4 '>
       <div className='pl-[50px] w-[301px] h-[248px]'>
          <img src="./assets/Brand.png" alt="Logo" className='w-[150px] h-[60px] ' />
          <p className='pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</p>
        </div>
        
        <div classname='w-[128px] h-[225px] flex flex-col'>
          <h1 className=' font-bold text-[19.2px] '>links</h1>
          <p href="#">Discover</p>
          <p href="#">Special Deals</p>
          <p href="#">Services</p>
          <p href="#">Community</p>
          <p href="#">About Us</p>
        </div>
        <div className='w-[181px] h-[225px] flex flex-col'>
          <h1 className='font-bold text-[19.2px]'>Services</h1>
          <a href="#">About Us</a>
          <a href="#">Blog & Articles</a>
          <a href="#">Term and Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>

        </div>
                <div className='w-[322px] h-[225px]'>
          <h1 className='font-bold text-[19.2px]'>Contact</h1>
         <p>Address: Jl.Codelaras No.205A</p>
          <p>Kediri, Pare AG17</p>
          <p>Phone: 123 456 7890</p>
          <p>Email: myagungperdana@gmail.com</p>
          <p>Maps: Kediri, East java</p>
          </div>
         <div className='grid pl-[50px]'>
          <h1 className='text-bold text-[19.2px] '>Ikuti Kami</h1>
          <div className=' w-10 h-5 gap-2 flex'>
          <img src="./assets/insta.png" alt="insta" />
           <img src="./assets/facebook.png" alt="insta" />
            <img src="./assets/twitter.png" alt="insta" />
            <img src="./assets/vector4.png" alt="insta" />
             <img src="./assets/vector5.png" alt="insta"/>
             </div>
             </div>
        </div> 
     
      
          </div>
        
   
        
      
   
  )
}

export default Final