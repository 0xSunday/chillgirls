import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";
import { navLinks } from "../Data";
import { close, menu } from "../public/assets";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import April from "../public/April.mp3";

const NavBar = () => {
  const [tottle, setTottle] = useState(false);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function toggleMusic() {
    setIsPlaying(!isPlaying);
  }

  return (
    <nav className="w-full flex py-6 sm:py-8  sm:px-14 px-6 justify-between items-center navbar text-black bg">
      <h2>
        <a
          href="/"
          className="md:text-[50px] text-3xl text-black font-bold  font-rubik2 pr-5"
        >
          Sakura
          <br className="block sm:hidden" /> Dreams
        </a>
      </h2>

      <div className="flex flex-row justify-center items-center z-10">
        <audio ref={audioRef} src="/April.mp3" autoPlay>
          <track kind="captions" />
        </audio>

        <button
          className="object-contain hidden sm:flex text-black text-3xl px-10 "
          onClick={toggleMusic}
        >
          {isPlaying ? <MdOutlineMusicNote /> : <MdOutlineMusicOff />}
        </button>

        <h2 className=" sm:block hidden font-poppins font-bold cursor-pointer text-[20px] text-black hover mr-10">
          <a href="/wl">White List</a>
        </h2>

        <ul className="list-none hidden sm:flex justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`menu font-poppins flex justify-center items-center font-semibold cursor-pointer text-[20px] text-black hover ${
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
          className="object-contain hidden sm:flex text-black text-3xl px-10 "
          onClick={toggleMusic}
        >
          {isPlaying ? <MdOutlineMusicNote /> : <MdOutlineMusicOff />}
        </button>
        <h2 className=" sm:hidden  font-poppins font-bold cursor-pointer text-[20px] text-black hover mr-3 border-2 p-1  border-black rounded-xl">
          <a href="/wl">WhiteList</a>
        </h2>

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
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar text-black z-10`}
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
