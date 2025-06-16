import React from 'react'

function NewsOne() {
  return (
    <div>
      <div>
        <img src="/assets/newsone.png" className='w-full h-[250px]' />
      </div>
      <div>
        <div className='flex justify-center text-[25px] mt-[100px]'> Travelaja Articles</div>
        <div className='flex justify-center pt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</div>
        <div className='flex justify-evenly pt-[50px]'>
          <button className=' bg-[#43B97F] rounded-lg h-10 p-2'>Adventure Travel</button>
          <button className=' bg-[#43B97F] rounded-lg h-10 p-2'>Beach</button>
          <button className=' bg-[#43B97F] rounded-lg h-10 p-2'>Explore World</button>
          <button className=' bg-[#43B97F] rounded-lg h-10 p-2'>Family Holidays</button>
          <button className=' bg-[#43B97F] rounded-lg h-10 p-2'>Art and culture</button>
        </div>

       
        <div className='p-[50px]'>
           <div className='grid grid-cols-3 p-[50px]'>
            <div>
              <img src="assets/rect1.png" />
              <div className='pr-30 pl-3'>
                <p>where can i go? 5 amazing countries that are open right now</p>
                <p>September 19, 2022</p>
              </div>
            </div>
            <div>
              <img src="assets/rect2.png" />
              <div className='pr-30 pl-3'>
                <p>beautiful view of indonesia's natural hills</p>
                <p>September 19, 2022</p>
              </div>
            </div>
            <div>
              <img src="assets/rect3.png" />
              <div className='pr-30 pl-3'>
                <p>10 Indonesian Destinations you should visit in this year</p>
                <p>September 19, 2022</p>
              </div>
            </div>
          </div>


          <div className='grid grid-cols-3 p-[50px]'>
            <div>
              <img src="assets/rect5.png" />
              <div className='pr-30 pl-3'>
                <p>5 mountains that you must visit while in Indonesia</p>
                <p>September 19, 2022</p>
              </div>
            </div>
            <div>
              <img src="assets/rect6.png" />
              <div className='pr-30 pl-3'>
                <p>beautiful view of indonesia's natural hills</p>
                <p>September 19, 2022</p>
              </div>
            </div>
            <div>
              <img src="assets/rect7.png" />
              <div className='pr-30 pl-3'>
                <p>10 Indonesian Destinations you should visit in this year</p>
                <p>September 19, 2022</p>
              </div>
            </div>
          </div>



          <div className='grid grid-cols-3 p-[50px]'>
            <div>
              <img src="assets/rect8.png" />
              <div className='pr-30 pl-3'>
                <p>10 Indonesian Destinations you should visit in this year</p>
                <p>September 19, 2022</p>
              </div>
            </div>
            <div>
              <img src="assets/rect9.png" />
              <div className='pr-30 pl-3'>
                <p>travel booking before missing the discount</p>
                <p>September 19, 2022</p>
              </div>
            </div>
            <div>
              <img src="assets/rect7.png" />
              <div className='pr-30 pl-3'>
                <p>where can i go? 5 amazing countries that are open right now</p>
                <p>September 19, 2022</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default NewsOne