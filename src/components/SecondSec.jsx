import React from 'react'
import Subtract from '../assets/Subtract.png'
function SecondSec() {
    return (

        <div className='flex px-[50px]'>
            <div className='w-[50%]'>
                <img src={Subtract} alt="subtract" className='w-full h-[448px]  mt-[101px] ' />
            </div>

            <div className='w-[50%] pl-[20px] mt-[99px]' >
                <p className='text-black text-[16px] mb-4'>Travelers Point</p>
                <span className='xl:text-[27.65px] font-bold border-[2px] border-black p-2'>We help to find your dream place</span>
                <p className='mt-4 xl:pe-[140px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi</p>
              <div className='flex'>
                 <div className=' w-[50%]'>
                <h1 className=' font-bold text-[27.65px] mt-5 text-[#295943]'>100+</h1>
                <h1>Holiday Package</h1>
                  </div>
               <div className='w-[50%]'>
                <p className=' font-bold text-[27.65px] mt-5 text-[#295943]'>172</p>
                <p>Hotels</p>
                </div>
              </div>
               <div className='flex'>
                <div className=' w-[50%]'>
                    <h1 className=' font-bold text-[27.65px] mt-5 text-[#295943]'>68</h1>
                    <p>Elite Transportation</p>
                </div>
                <div className=' w-[50%]'>
                    <h1 className=' font-bold text-[27.6px] mt-5 text-[#295943]'>32M+</h1>
                    <p>we help to find your dream place</p>
                </div>

               </div>
               
            </div>
        </div>


    )
}

export default SecondSec