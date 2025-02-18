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
        <div className="max-md:text-3xl text-5xl font-semibold title after:w-24 after:bg-emerald-800 after:h-2 after:flex">
          <span className="text-emerald-800">About </span>Us
        </div>
        <div className="max-lg:max-w-[100%] max-w-[70%] w-full my-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit neque rem, eum sequi cumque totam dolor inventore incidunt quo nihil, tenetur optio facere quisquam! Assumenda iure alias dolor quo aut. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi adipisci esse dolorem nostrum rem fugit autem architecto, sint tempora aspernatur distinctio eos quos suscipit exercitationem alias, nobis placeat, accusamus error!
        </div>
      </div>

    </div>
  );
}

export default About;
