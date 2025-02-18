import React from 'react'
import Button from './Button'
import { BiArrowBack } from 'react-icons/bi'
import Image from 'next/image'

const Collection = () => {
  return (
    <div id="collection">
      <div className="flex flex-row max-md:flex-col gap-y-5 justify-between max-md:mx-5 mx-20 my-20">
        <div className="max-md:text-3xl max-xl:text-4xl text-5xl max-md:w-full w-[50%]">
          <span className="text-emerald-800">Upgrade</span> Your{' '}
          <span className="text-emerald-800">Style</span> with Our Weekly{' '}
          <span className="text-emerald-800">Collection</span>
        </div>
        <Button
          text="Shop now"
          link="https://wa.link/l2w6s6"
          paddingX="p-10"
          icon={<BiArrowBack className="rotate-[180deg]" />}
        />
      </div>

      {/* Grid Layout */}
      <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-10 max-md:mx-5 mx-20 mb-20">
        
        {/* Collection Items */}
        {[
          { src: '/men.png', label: "Men's collection", position: 'bottom-10 left-10' },
          { src: '/women.png', label: "Women's collection", position: 'top-10 left-10' },
          { src: '/children.png', label: "Children's collection", position: 'top-10 right-10', textColor: 'text-black' },
          { src: '/specials.png', label: 'Specials', position: 'bottom-10 right-10' }
        ].map((item, index) => (
          <div key={index} className="relative w-full h-[450px] rounded-3xl overflow-hidden border border-opacity-10 border-[grey]">
            <Image
              src={item.src}
              fill
              className="object-cover"
              alt={item.label}
            />
            <span className={`absolute ${item.position} mx-10 text-xl ${item.textColor || 'text-white'}`}>
              {item.label}
            </span>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Collection
