import React from 'react'

function Card2() {
    return (
        <div className=' mt-[101px]' >
            <h1 className='flex justify-center font-bold text-[16px] text-[#295943]'>Testimonial</h1>
            <h1 className='flex justify-center font-bold text-[27.65px]'>What they say about us</h1>
            <div className='px-12 grid grid-cols-3 gap-x-12'>
                <div className='p-4 hover:bg-[#43B97F] hover:text-white'>
                    <div className='flex gap-4 items-center'>
                        <img src="./assets/profile1.png" />
                        <h1>Angelina Simple</h1>
                    </div>
                    <p className='pr-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>
                <div className='p-4 hover:bg-[#43B97F] hover:text-white' >
                    <div className='flex gap-4 items-center'>
                        <img src="./assets/profile2.png" />
                        <h1>Viola Natalie</h1>
                    </div>
                    <p className='pr-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>
                <div className='p-4 hover:bg-[#43B97F] hover:text-white' >
                    <div className='flex gap-4 items-center'>
                        <img src="./assets/profile3.png" />
                        <h1>Robert John K.</h1>
                    </div>
                    <p className='pr-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>
            </div>
            <div  className='px-12 grid grid-cols-3 gap-x-6'>
                <div className='p-4 hover:bg-[#43B97F] hover:text-white'>
                    <div className='flex gap-4 items-center'>
                        <img src="./assets/profile4.png" />
                        <h1>Anggi Nani</h1>
                    </div>
                    <p className='pr-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>
                <div className='p-4 hover:bg-[#43B97F] hover:text-white' >
                    <div className='flex gap-4 items-center'>
                        <img src="./assets/profile5.png" />
                        <h1>Graham Suryo J</h1>
                    </div>
                    <p className='pr-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>
                <div className='p-4 hover:bg-[#43B97F] hover:text-white' >
                    <div className='flex gap-4 items-center'>
                        <img src="./assets/profile6.png" />
                        <h1>Bagas G Natfi</h1>
                    </div>
                    <p className='pr-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>

            </div>
        </div>

    )
}

export default Card2