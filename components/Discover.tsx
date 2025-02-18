import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Button from './Button'

const Discover = () => {
  return (
    <div id='discover' className='relative w-[90%] mx-auto ' >
        <img className='w-full object-cover max-md:h-[400px] h-[550px] rounded-3xl  '  src="/discover.png" alt="" />
        <div className="absolute top-[30%] left-[10%] flex flex-col items-center  ">
            <div className='max-md:text-3xl max-xl:text-5xl text-6xl w-[70%] text-center  ' ><span className='text-white' >Discover</span> Your <span className='text-white' >latest</span> collection on <span className='text-white' >our</span> shop</div>
            <div className='my-10 max-md:scale-90 ' > <Button paddingX='max-md:px-5 px-20'  text='Explore Now' icon={<BiArrowBack className='rotate-[180deg]' />} /></div>
        </div>
    </div>
  )
}

export default Discover