import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { BiArrowBack } from 'react-icons/bi'

const Collection = () => {
  return (
    <div id='collection' >
        <div className='flex flex-row max-md:flex-col gap-y-5 justify-between max-md:mx-5 mx-20 my-20' >
            <div className=' max-md:text-3xl max-xl:text-4xl text-5xl max-md:w-full w-[50%] '><span className='text-emerald-800' >Upgrade</span> Your <span className='text-emerald-800' >Style</span> with Our Weekly <span className='text-emerald-800' >Collection</span></div>
            <Button text='Shop now' paddingX='p-10'  icon={<BiArrowBack className='rotate-[180deg]' />} />
        </div>
        <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-10 relative  max-md:mx-5 mx-20 mb-20 ">
        <Link 
            href="https://wa.link/r2oi93"><div className='w-full relative ' ><Image width={500} height={450} className='w-full max-h-[450px] object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey]' src="/men.png" alt="" /><span className="absolute bottom-10 mx-10 text-xl text-white ">Men's collection</span></div>
        </Link><Link 
            href="https://wa.link/r2oi93"><div className='w-full relative ' ><Image width={500} height={450} className='w-full max-h-[450px] object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey]' src="/women.png" alt="" /><span className="absolute top-10 mx-10 text-xl text-white ">Women's collection</span></div>
        </Link><Link 
            href="https://wa.link/r2oi93"><div className='w-full relative ' ><Image width={500} height={450} className='w-full max-h-[450px] object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey]' src="/children.png" alt="" /><span className="absolute top-10 right-10 mx-10 text-xl text-black max-sm:text-white ">Children's collection</span></div>
        </Link><Link 
            href="https://wa.link/r2oi93"><div className='w-full relative ' ><Image width={500} height={450} className='w-full max-h-[450px] object-cover rounded-3xl border-spacing-3 border-opacity-10 border border-[grey]' src="/specials.png" alt="" /><span className="absolute bottom-10 right-10 text-xl text-white ">Specials</span></div>
        </Link></div>
    </div>
  )
}

export default Collection