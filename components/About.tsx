import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="flex max-lg:flex-col flex-row max-md:mx-5 mx-20 items-center">
      
      {/* Image Section */}
      <div className="max-lg:w-full w-[50%] flex justify-center mx-auto">
        <div className="relative w-[60%] h-[400px] max-md:h-[300px] rounded-full overflow-hidden">
          <Image
            src="/about.png"
            fill
            className="object-cover"
            alt="About"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-lg:w-full w-[50%] mx-auto my-10">
        <div className="max-md:text-3
