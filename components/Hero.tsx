import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { BiArrowBack } from 'react-icons/bi';

const Hero = () => {
  return (
    <div id="hero">
      <div className="max-md:text-4xl max-xl:text-5xl text-6xl leading-[70px] max-xl:max-w-full max-w-[60%] text-center w-fit mx-auto mt-10 max-md:mb-10 mb-20 font-bold">
        <q>
          <span className="text-emerald-800">Fuel</span> Your <span className="text-emerald-800">Health</span> One{' '}
          <span className="text-emerald-800">Vitamin</span> At A <span className="text-emerald-800">Time</span>
        </q>
      </div>

      <div className="flex max-md:justify-center relative max-md:gap-y-5 justify-between max-md:max-w-[90%] max-w-[70%] mx-auto flex-wrap items-center">
        {/* FIXED IMAGES */}
        <div className="relative max-w-96 w-full h-72">
          <Image src="/hero1.png" fill className="object-cover rounded-3xl border border-gray-300" alt="img_default" />
        </div>
        <div className="relative max-w-96 w-full h-72">
          <Image src="/hero2.png" fill className="object-cover rounded-3xl border border-gray-300" alt="img_default" />
        </div>

        <div className="max-w-[350px]">
          <div className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure rerum aperiam unde excepturi doloremque
            expedita, necessitatibus ex dolorum.
          </div>
          <Button width="w-[80%]" link="https://wa.link/l2w6s6" text="Explore Now" icon={<BiArrowBack className="rotate-180" />} />
          <Button width="w-[80%]" link="https://wa.link/l2w6s6" color="bg-black" text="Shop Now" />
        </div>
      </div>

      {/* FIXED SPONSOR LOGOS */}
      <div className="sponsors my-20">
        <ul className="flex justify-center flex-wrap items-center gap-5">
          {['logo1c.png', 'logo2c.png', 'logo3c.png', 'logo4c.png', 'logo5c.png', 'logo6c.png'].map((logo, index) => (
            <li key={index} className="list-none">
              <div className="relative max-md:w-28 max-w-52 h-20">
                <Image src={`/${logo}`} fill className="object-contain" alt="sponsor logo" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
