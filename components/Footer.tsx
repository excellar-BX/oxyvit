import Link from "next/link";
import React from "react";
import { BiLogoInstagram, BiLogoMeta, BiLogoTwitter, BiLogoWhatsapp, } from "react-icons/bi";


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear()
  return (
    <div className="max-sm:pt-5 max-sm:px-5 px-20 pt-32 bg-black text-white ">
      <div className="flex max-md:flex-col flex-row justify-evenly ">
        <div className="block max-md:w-[90%] w-[50%]  ">
          <div className="text-4xl max-md:w-full w-[30%] font-semibold hover:cursor-pointer my-5 ">
            <span className="text-5xl font-bold text-emerald-700">O</span>xyvit
          </div>
          <div className="max-w-[400px]  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod
            modi ut alias quos omnis.
          </div>
        </div>
        <div className="grid max-md:grid-cols-1 max-md:justify-center max-md:mt-10 gap-y-2 text-center grid-cols-3  max-md:w-full w-[40%] ">
          <div className=" flex flex-col  text-left">
            <div className="text-x " >Menu</div>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >Men</Link>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >Women</Link>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >Children</Link>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >Specials</Link>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >Contact</Link>
          </div>
          <div className=" flex flex-col  text-left">
            <div className="text-xl" >Social</div>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >LinkedIn</Link>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >Twitter</Link>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >Instagram</Link>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >Whatsapp</Link>
          </div>
          <div className=" flex flex-col text-left">
            <div className="text-x " >Help</div>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >Privacy & Policy</Link>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >Refund Policy</Link>
            <Link href={'/'} className="text-opacity-60 hover:text-emerald-800 hover:text-opacity-100 text-white" >Terms Of Use</Link>
          </div>
        </div>
      </div>
      <div className="bottom max-md:pt-5 pt-32 flex max-md:flex-col max-md:gap-y-5 max-md:items-center flex-row justify-between max-lg:mx-0 mx-20 pb-10">
        <div className="copyright hover:text-emerald-800 text-center text-2xl">{year} &copy; Oxyvit Multivitamins Inc</div>
        <div className="socials text-3xl flex flex-row  ">
          
        <Link href={'/'} className="hover:text-emerald-800 mx-2" ><BiLogoInstagram/></Link>
        <Link href={'/'} className="hover:text-emerald-800 mx-2" ><BiLogoMeta/></Link>
        <Link href={'/'} className="hover:text-emerald-800 mx-2" ><BiLogoTwitter/></Link>
        <Link href={'/'} className="hover:text-emerald-800 mx-2" ><BiLogoWhatsapp/></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
