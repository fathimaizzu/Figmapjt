import React from 'react'
import Navbar2 from '../Navbar2'

function AboutOne() {
  return (
    <div>
      <img src='/assets/about1.png' className='w-full' />

      <div className='pt-[100px]'>

        <h1 className='text-[27.65px] font-bold flex justify-center '>Why Choose Us ?</h1>
        <p className='flex justify-center'>These popular destinations have a lot to offer</p>
      </div>
      <div className='flex justify-between mt-20 gap-10 px-30 '>
        <div>
          <img src='/assets/about2.png'className='px-50'/>
          <h1 className='text-[23.04px] p-5 text-center'>Best price guarantee</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div>
          <img src='/assets/about3.png'  className='px-50' />
          <h1 className='text-[23.04px] p-5 text-center'>Easy Booking</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>


        <div>
          <img src='/assets/about4.png' className='px-50' />
          <h1 className='text-[23.04px] p-5 text-center'>Customer Service 24h</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className='p-[50px] flex gap-10 mt-[100px]'>
        <div className='w-[70%] px-10'>
          <h1 className='text-[27.65px] font-bold'>About Travelaja.com</h1>
          <p className='mt-[20px] leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum et in feugiat. Platea in diam, est congue. Posuere sapien morbi augue ultrices. Et facilisi orci sollicitudin placerat lacus lacus nibh. Egestas semper massa viverra massa proin in morbi placerat. Pharetra nec, est non integer nisi, ut faucibus. Non, in nam sollicitudin vitae volutpat ac molestie. Turpis pellentesque sit pellentesque id cras lobortis tortor, blandit.</p>
          <p className='pt-[5px] leading-8'>Id ac non, semper turpis maecenas. Convallis tempor fringilla quisque arcu, dictum. Vitae cursus vel netus tincidunt vitae. Malesuada velit, at mattis adipiscing quisque tristique id magna. Blandit porta sit nam magna sit. Turpis vestibulum facilisis placerat habitant gravida eget. Lacus pretium, arcu non adipiscing sed faucibus semper eget tempor.</p>
        </div>
        <div className='w-[30%]'>
          <img src='/assets/about5.png' className='w-full h-[494px]' />
        </div>

      </div>
      <div className='px-[90px] pt-[100px]'>
        <h1 className='text-[27.65px] font-bold'>Our Teams</h1>
        <p className='pt-[10px]'>Lorem ipsum dolor sit amet</p>
         </div>
         <div className='flex justify-between p-20'>
          <div>
          <img src='assets/about6.png'/>
          <p className='text-[19.2px]'>Agung perdana</p>
          <p className='text-[16px]'>Web Designer</p>
          </div>

           <div>
          <img src='assets/about7.png'/>
          <p className='text-[19.2px]'>Viola Resti</p>
          <p className='text-[16px]'>Marketing Director</p>
          </div>
           <div>
          <img src='assets/about9.png'/>
          <p className='text-[19.2px]'>Rahardianysah</p>
          <p className='text-[16px]'>International Relations</p>
          </div>
           <div>
          <img src='assets/about10.png'/>
          <p className='text-[19.2px]'>Andika</p>
          <p className='text-[16px]'>Medical Check</p>
          </div>

           <div>
          <img src='assets/about11.png'/>
          <p className='text-[19.2px]'>Theresa Russell</p>
          <p className='text-[16px]'>Doctor Assistant</p>
          </div>


         </div>
         <div className='flex justify-between p-20'>
          <img src='assets/about12.png'/>
           <img src='assets/about13.png'/>
            <img src='assets/about14.png'/>
             <img src='assets/about16.png'/>
           
         
          
         </div>


    </div>
  )
}

export default AboutOne