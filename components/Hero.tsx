import Image from 'next/image'
import React from 'react'
import Button from './Button'
import {BiArrowBack, BiArrowToLeft, BiSolidArrowToRight} from 'react-icons/bi'

const Hero = () => {
  return (
    <div id='hero' >
        <div className='max-md:text-4xl max-xl:text-5xl text-6xl leading-[70px] max-xl:max-w-full max-w-[60%] text-center w-fit mx-auto mt-10 max-md:mb-10 mb-20 font-bold  '><q><span className='text-emerald-800' >Fuel</span> Your <span className='text-emerald-800' >Health</span> One <span className='text-emerald-800'>Vitamin</span> At A <span className='text-emerald-800'>Time</span> </q></div>
        <div className='flex max-md:justify-center max-md:gap-y-5 justify-between max-md:max-w-[90%] max-w-[70%]  mx-auto flex-wrap  items-center ' >
        <img className='max-w-96 w-full h-72 object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey] ' src="/hero1.png" alt="img_default" />
        <img className='max-w-96 w-full h-72 object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey] ' src="/hero2.png" alt="img_default" />
        <div className='max-w-[350px]  ' >
            <div className='my-2 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure rerum aperiam unde excepturi doloremque expedita, necessitatibus ex dolorum.</div>
            <Button width='w-[80%] ' link="https://wa.link/l2w6s6"  text='Explore Now' icon={<BiArrowBack className='rotate-[180deg]' />} />
            <Button width='w-[80%]' link="https://wa.link/l2w6s6" color='bg-[black]' text='Shop Now' />
        </div>
        </div>
        <div className="sponsors my-20 ">
            <ul className='flex justify-center flex-wrap items-center ' >
            <li className='w-full max-md:max-w-28 max-w-52 mx-5 list-none ' > <Image
      src="/logo1c.png"
      width={fill}
      height={fill}
       className=' w-full object-cover '
      alt="img_default" /></li>
            <li className='w-full max-md:max-w-28 max-w-52 mx-5 list-none ' ><Image
      src="/logo2c.png"
      width={fill}
      height={fill}
       className=' w-full object-cover '
      alt="img_default" /></li>
            <li className='w-full max-md:max-w-28 max-w-52 mx-5 list-none ' ><Image
      src="/logo3c.png"
      width={fill}
      height={fill}
       className=' w-full object-cover '
      alt="img_default" /></li>
            <li className='w-full max-md:max-w-28 max-w-52 mx-5 list-none ' ><Image
      src="/logo4c.png"
      width={fill}
      height={fill}
       className=' w-full object-cover '
      alt="img_default" /></li>
            <li className='w-full max-md:max-w-28 max-w-52 mx-5 list-none ' ><Image
      src="/logo5c.png"
      width={fill}
      height={fill}
       className=' w-full object-cover '
      alt="img_default" /></li>
            <li className='w-full max-md:max-w-28 max-w-52 mx-5 list-none ' ><Image
      src="/logo6c.png"
      width={fill}
      height={fill}
       className=' w-full object-cover '
      alt="img_default" /></li>
            </ul>
        </div>
    </div>
  )
}

export default Hero
