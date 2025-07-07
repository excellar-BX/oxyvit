import React from 'react'
import Image from 'next/image';
import Button from './Button';

const Discount = () => {
  return (
    <div className='w-full min-h-[200px] max-md:max-h-[300px] h-full max-h-[400px] text-center flex flex-col items-center relative' >
        <div className='w-full' ><Image width={500} height={400} className='w-full object-cover  min-h-[200px] ' src="/discount.png" alt="discount" /></div>
        <div className='absolute left-[5%] max-lg:top-[10%] top-[20%] ' >
      <div className='max-lg:text-4xl text-[60px]' >Discount <span className='text-white' >Sale</span></div>
      <div className='max-lg:text-5xl text-[80px] font-semibold' ><span className='text-emerald-500' >30%</span>Off</div>
    <Button text='Shop Now' 
            link="https://wa.link/r2oi93" className='max-md:scale-75 ' paddingX='px-20' />
    </div>
    </div>
  );
}

export default Discount;
