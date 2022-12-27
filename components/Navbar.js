import { close, menu } from "../public/assets";
import { MdOutlineMusicOff } from "react-icons/md";
import { MdOutlineMusicNote } from "react-icons/md";
import { navLinks } from "../Data";

import Image from "next/image";
import { use, useState } from "react";

const NavBar = () => {
  const [tottle, setTottle] = useState(false);
  const [music, setMusic] = useState(false);
  return (
    <nav className="w-full flex py-6 sm:py-8 sm:px-8 px-4 justify-between items-center navbar text-black bg">
      <h2 className="md:text-[50px] text-2xl text-black font-bold  font-rubik2 ">
        Chill Girls
      </h2>

      <div className="flex flex-row justify-center items-center z-10">
        <button
          className="object-contain hidden sm:flex text-black text-3xl px-10"
          onClick={() => {
            setMusic((tog) => {
              return !tog;
            });
          }}
        >
          {music ? <MdOutlineMusicOff /> : <MdOutlineMusicNote />}
        </button>
        <ul className="list-none hidden sm:flex justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`menu font-poppins font-semibold cursor-pointer text-[20px] text-black hover ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center text-black">
        <button
          className="object-contain sm:hidden text-black text-3xl px-5"
          onClick={() => {
            setMusic((tog) => {
              return !tog;
            });
          }}
        >
          {music ? <MdOutlineMusicOff /> : <MdOutlineMusicNote />}
        </button>

        <Image
          src={tottle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px] object-contain text-black"
          onClick={() => {
            setTottle((tog) => {
              return !tog;
            });
          }}
        />
        <div
          className={`${
            tottle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar text-black`}
        >
          <ul className="list-none flex p-4 rounded-3xl  justify-end flex-col items-center flex-1 bg-pink-500 text-black  border-black">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins  cursor-pointer text-[16px] font-semibold text-black hover  ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-10"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
