import React from 'react'

function ContactOne() {
  return (
    <div>
      <div className='relative '>
        <img src='assets/contact1.png' className='w-full'/>
         <h1 className='text-bold text-[33.18px] absolute left-[50px] bottom-[50px] text-white'>Contact Us</h1>
         </div>
         <div className='flex p-20  '>
          <div className='mt-5 px-[150px] '>
            <h1 className='font-bold text-[27.65px]'>Get in touch</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra</p>
          <h3 className='mt-5'>Name :</h3>
          <input type='text' placeholder='Input your name'  className='text-[#A8A7AB] w-[580px] h-[57px] px-3 border-2 rounded-lg'/>
           <h3>Email :</h3>
          <input type='text' placeholder='Email'  className='text-[#A8A7AB] w-[580px] h-[57px] px-3 border-2 rounded-lg'/>
         <h3>Message :</h3>
          <input type='text' placeholder='Message'  className='text-[#A8A7AB] w-[580px] h-[159px] px-3 border-2 rounded-lg'/>
         <div className='mt-5'> 
          <button className='w-[81px] h-[39px] bg-[#43B97F] rounded-lg'>Send</button>
         </div>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31494.990938083323!2d76.35280574249714!3d9.344428156707476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b089ec92f6211a1%3A0x8e6a57f7ec6aad16!2sPurakkad%2C%20Kerala%20688561!5e0!3m2!1sen!2sin!4v1749449688495!5m2!1sen!2sin" className='w-[580px] h-[314px]' ></iframe>
        <div className='flex gap-15'>
          <div className='space-y-3'>
       <p>Address :   JL.Cindelaras No.205A</p>
         <p>City : Yogyakarta, Indonesia</p>
         <p>Open :At 8AM</p>
         </div>
         <div className='space-y-3'>
          <p>Phone : +62 1234 432 567</p>
          <p>Email :info@travelaja.com</p>
          <p>Close :At 8PM</p>
        </div>
         </div>
          <p className='mt-[20px]'>AVAILABLE AT 9AM - 10PM</p>
          <p className='text-[68.8px]'>+124 4537 9756</p>
         </div>
       
           
    </div>
    </div>
  )
}

export default ContactOne