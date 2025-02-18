import React from 'react';

const Newsletter = () => {
  return (
     <div className="newsletter pb-20 relative max-xl:h-[400px] h-[300px] bg-gradient-to-br from-emerald-800 via-emerald-600 to-emerald-400 " id="newsletter" >
    {/* <img
      src="/newsletter.png"
      className="w-full object-cover h-[500px] "
      alt=""
    /> */}
    <div className="absolute inset-y-[10%] sm:inset-[20%] ">
      <div className="max-sm:text-3xl text-5xl font-bold leading-[70px] text-white text-center " >Subscribe to Our Newsletter</div>
      <div className="flex justify-center my-10 " >
      <div className="flex bg-white mx-3 lg:w-[50%] h-[40px] rounded-full " >
        <input type="text" className="w-[80%] placeholder:text-sm outline-none border-none h-full px-4 rounded-full " placeholder="Email address" />
        <div className="btn bg-emerald-700 h-full flex text-center rounded-full items-center px-5 text-white cursor-pointer ">Subscribe</div>
      </div>
      </div>
      <div className="text-center text-white  " >
          Subscribe to our newsletters and exclusive promotions. Read our
         <a href="/" ><span className="privacy-policy underline mx-2 cursor-pointer ">Privacy Policy</span></a>
      </div>
    </div>
  </div>
  );
}

export default Newsletter;
