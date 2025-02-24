import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import sendEmail from "./SendEmail"; // Import the function
import { BiArrowBack, BiEnvelope, BiGlobe, BiUser } from "react-icons/bi";
import Input from "./Input";
import { FormButton } from "./Button";

const Contact = () => {

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    setLoading(true);

    try {
      await sendEmail({ firstName, lastName, phone, email, message });
      setError("");
      setSuccess("Email Sent Successfully.");

      // Reset form fields
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setSuccess("Email Sent Successfully.");
    } catch {
      setError("Failed to send email.");
      setSuccess("");
    }
    setLoading(false);
  };

  return (
    <div id="contact" className="flex flex-row max-md:flex-col max-md:mx-5 items-center my-10">
      <div className="max-md:w-full w-[40%] flex justify-center relative ">
        <Image width={500} height={400} src="/contact.png" alt="" />
      </div>
      <div className="max-md:w-full w-[40%] mx-auto ">
        <form onSubmit={handleSubmit} className="w-full " >
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
            <div className="max-lg:w-full w-[50%]">
              <Input
                type="text"
                value={firstName} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                label="Firstname"
                placeholder="i.e Gbenga"
                required={true}
                icon={<BiUser />}
              />
            </div>
            <div className="max-lg:w-full w-[50%]">
              <Input
                type="text"
                value={lastName} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
               
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
            value={email} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
               
                placeholder="i.e 123@example.com"
                required={true}
                icon={<BiEnvelope/>}
              />
          </div>
          <div>
          <Input
                type="text"
                label="Phone Number"
            value={phone} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
               
                placeholder="i.e 123-456-789-0"
                required={true}
                icon={<BiGlobe/>}
              />
          </div>
          <div>
            <label htmlFor="message" className="font-semibold" >Message</label>
            <textarea value={message} 
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                 placeholder="Enter your message here" id="message" className="w-full mt-2 max-h-40 rounded-3xl p-5 bg-emerald-700 placeholder:text-black placeholder:text-opacity-50 bg-opacity-20 outline-none border-none border-[grey] border-2 " maxLength={1000} ></textarea>
          </div>
          <FormButton value= {loading ? "Sending..." : "Send Email"} type="submit" icon={<BiArrowBack className='rotate-180' />} />
          
            <div className="text-sm my-2 text-[red]" >{error}</div>
          
            <div className="text-sm my-2 text-[green]" >{success}</div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
