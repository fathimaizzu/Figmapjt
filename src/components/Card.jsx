import React from 'react'

function Card() {
  return (
   <>
    <div>
        <h1 className='flex justify-center mt-[100px] font-bold text-[16px] text-[#295943]'>Top Destination</h1>
        <p className='font-bold text-[27.65px] flex justify-center'>Discover your love</p>
    </div>
    <div className='grid grid-cols-3 gap-x-4 gap-y-10  px-[50px]'>
   
    <div className='    rounded-xl  p-[10px] shadow-xl drop-shadow-2xl ' >
   <img src="../src/assets/card.png" alt="card" className='w-full' />
   <h1 className='font-bold text-[19.2] pt-[20px]'> Taman Nasional Komodo </h1>
   <div className='flex justify-between mt-8'>
    <h1 className='font-bold text-[16]'>Rp. 7,5jt</h1>
   <div className='flex gap-2'>
    <img src="../src/assets/Group2.png" alt="group"/>
    <p>7 days for trips</p>
    </div>
    </div>
    </div>

    <div className='   shadow-xl drop-shadow-2xl rounded-xl  p-[10px]' >
   <img src="../src/assets/rectangle.png" alt="card" className='w-full' />
   <h1 className='font-bold text-[19.2] pt-[20px]'>Taman Nasional Bunaken </h1>
   <div className='flex justify-between mt-8'>
    <h1 className='font-bold text-[16]'>Rp. 10,5jt</h1>
   <div className='flex gap-2'>
     <img src="../src/assets/Group2.png" alt="group"/>
    
    <p>9 days for trips</p>
    </div>
    </div>
    </div>
    <div className='shadow-xl drop-shadow-2xl rounded-xl  p-[10px]' >
   <img src="../src/assets/Rectangle.png" alt="card" className='w-full' />
  <h1 className='font-bold text-[19.2] pt-[20px]'> Raja Ampat, Papua Barat </h1>
   <div className='flex justify-between mt-8'>
    <h1 className='font-bold text-[16]'>Rp. 20,5jt</h1>
   <div className='flex gap-2'>
    <img src="../src/assets/Group2.png" alt="group"/>
    
    <p>14 days for trips</p>
    </div>
    </div>
    </div>

       
    <div className=' shadow-xl drop-shadow-2xl rounded-xl  p-[10px]' >
      <img src="../src/assets/Rectangle5.png" alt="card" className='w-full' /> 
        <h1 className='font-bold text-[19.2] pt-[20px]'> Kepulauan Wakatobi </h1>
   <div className='flex justify-between mt-8'>
    <h1 className='font-bold text-[16]'>Rp. 9,5jt</h1>
   <div className='flex gap-2'>
    
    <p>12 days for trips</p>
    </div>
    </div> 
    </div>
        <div className=' shadow-xl drop-shadow-2xl rounded-xl  p-[10px] ' >
      <img src="../src/assets/GroupA.png" alt="card" className='w-full' /> 
        <h1 className='font-bold text-[19.2] pt-[20px]'>Gili Trawangan, Lombok </h1>
   <div className='flex justify-between mt-8'>
    <h1 className='font-bold text-[16]'>Rp. 6,5jt</h1>
   <div className='flex gap-2'>
   
    <p>7 days for trips</p>
    </div>
    </div> 
    </div>
        <div className='  shadow-xl drop-shadow-2xl rounded-xl  p-[10px]' >
   <img src="../src/assets/Group14.png" alt="card" className='w-full' />
   <h1 className='font-bold text-[19.2] pt-[20px]'> Taman Nasional Bromo</h1>
   <div className='flex justify-between mt-8'>
    <h1 className='font-bold text-[16]'>Rp. 9,5jt</h1>
   <div className='flex gap-2'>
    <img src="../src/assets/Group2.png" alt="group"/>
    <p>7 days for trips</p>
    </div>
    </div>
    </div>
    </div>
   </>

  )
}

export default Card