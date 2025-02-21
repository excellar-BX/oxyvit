import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import sendEmail from "./SendEmail"; // Import the function
import { BiArrowBack, BiEnvelope, BiGlobe, BiUser } from "react-icons/bi";
import Input from "./Input";
import { FormButton } from "./Button";

const Contact = () => {

  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [message, setMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  return (
    <div id="contact" className="flex flex-row max-md:flex-col max-md:mx-5 items-center my-10">
      <div className="max-md:w-full w-[40%] flex justify-center relative ">
        <Image width={500} height={400} src="/contact.png" alt="" />
      </div>
      <div className="max-md:w-full w-[40%] mx-auto ">
        <form action="" className="w-full " >
          <div className="text-2xl my-10  w-[30%] font-semibold hover:cursor-pointer ">
            <Link href={"/"}>
              <span className="text-3xl font-bold text-emerald-700">O</span>
              xyvit
            </Link>
          </div>
          <div className="text-5xl my-3 font-semibold">Let's Get In Touch.</div>
          <div className="mb-5">
            or reach out to us manually{" "}
            <span className="text-emerald-800">
              <Link href={"mailto:info.oxyvit@gmail.com"}>
                info.oxyvit@gmail.com
              </Link>
            </span>{" "}
          </div>
          <div className="flex flex-row max-lg:flex-col">
            <div className="text-sm text-[red]" >{error}</div>
            <div className="max-lg:w-full w-[50%]">
              <Input
                type="text"
                label="Firstname"
                placeholder="i.e Gbenga"
                required={true}
                icon={<BiUser />}
              />
            </div>
            <div className="max-lg:w-full w-[50%]">
              <Input
                type="text"
                label="Lastname"
                placeholder="i.e Favours"
                required={true}
                icon={<BiUser />}
              />
            </div>
          </div>
          <div>
          <Input
                type="email"
                label="Email Address"
                placeholder="i.e 123@example.com"
                required={true}
                icon={<BiEnvelope/>}
              />
          </div>
          <div>
          <Input
                type="text"
                label="Phone Number"
                placeholder="i.e 123-456-789-0"
                required={true}
                icon={<BiGlobe/>}
              />
          </div>
          <div>
            <label htmlFor="message" className="font-semibold" >Message</label>
            <textarea  placeholder="Enter your message here" id="message" className="w-full mt-2 max-h-40 rounded-3xl p-5 bg-emerald-700 placeholder:text-black placeholder:text-opacity-50 bg-opacity-20 outline-none border-none border-[grey] border-2 " maxLength={1000} ></textarea>
          </div>
          <FormButton value="Submit" type="submit" icon={<BiArrowBack className='rotate-180' />} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
