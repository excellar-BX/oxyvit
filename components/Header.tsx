import React, { useState } from "react";
import { FaHeart, FaUserShield } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import Button from "./Button";
import Link from "next/link";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Header = () => {
  const navLinks = [
    { name: "Home", route: "#hero" },
    { name: "Collection", route: "#collection" },
    { name: "Discount", route: "#discount" },
    { name: "About", route: "#about" },
    { name: "Contact", route: "#contact" },
  ];

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex flex-row border-b-2 h-20 items-center justify-between px-5 sm:px-20 border-black border-opacity-30">
      <div className="text-4xl w-[10%] font-semibold hover:cursor-pointer ">
        <Link href={"/"}>
          <span className="text-5xl font-bold text-emerald-700">O</span>xyvit
        </Link>
      </div>

      {!navOpen ? (
        <button
          type="button"
          className=""
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          {""}
          <BiMenuAltRight className="text-5xl max-2xl:block hidden" />
        </button>
      ) : (
        <button
          type="button"
          className=""
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          {" "}
          {""}
          <BiX className="text-5xl max-2xl:block hidden" />
        </button>
      )}
      <div className="hidden" >
            <OutsideClickHandler
              onOutsideClick={() => {
                setNavOpen(false);
              }}
            ></OutsideClickHandler>
            </div>
        <div
          className={`left-side-wrapper w-[80%] max-2xl:w-fit ${
            navOpen
              ? "scale-y-100 max-[400px]:scale-75 max-2xl:translate-x-0"
              : "max-2xl:scale-y-0 scale-100 max-2xl:translate-x-40"
          } duration-500 flex flex-row items-center max-2xl:flex-col max-2xl:absolute max-[400px]:right-0 max-2xl:right-10 right-0 top-0 static max-[400px]:top-10 max-2xl:top-20 max-2xl:bg-emerald-800 rounded-xl max-2xl:py-5  max-2xl:text-white justify-evenly max-2xl:px-2  `}
        >
          <ul className="flex  flex-row max-2xl:flex-col bg-transparent  items-center text-xl ">
            {navLinks.map((data, index) => (
              <Link className="" key={index} scroll={true} href={data.route}>
                <li className="mx-5 max-2xl:my-2 hover:font-bold hover:cursor-pointer ">
                  {data.name}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex flex-row max-2xl:flex-col ">
            <div className="flex mx-4 items-center hover:cursor-pointer py-3 max-2xl:text-xl  ">
              <FaUserShield className="mx-1 text-emerald-800 text-2xl " />{" "}
              Customer Support
            </div>
            <div className="justify-center flex">
              <Button text="Contact us" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Header;
