import React from "react";
import logo from "../public/assets/logo.png";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
const MainHeading = () => {
  return (
    <section className="bg flex flex-col sm:flex-row flex-1 sm:px-14 px-6 py-10">
      <div className=" flex flex-[50%] flex-col pt-10 items-start ">
        <h1 className="sm:text-[200px] text-[100px] -mt-20 sm:mt-0 font-bold font-rubik sm:-mb-16 text-pink-800">
          CHILL{" "}
        </h1>
        <h1 className="sm:text-[130px] text-[70px] -mt-10 sm:mt-0 font-bold font-rubik  text-pink-800">
          GIRLS
        </h1>
        <p className="font-poppins font-semibold py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          officia.
        </p>
        <button className=" flex my-5 py-3 px-8 border sm:ml-auto mr-[60px] text-2xl font-bold border-black gap-2 justify-center text-center rounded-3xl items-center hover:bg-pink-900 hover:text-white ">
          <a
            className="flex  gap-2 justify-center text-center items-center"
            href="https://discord.com/channels/887266551105978369/1024881251666108506"
          >
            Join <FaDiscord />
          </a>
        </button>
      </div>

      <div className="flex flex-[50%] justify-center items-center py-5 ">
        <Image
          className="sm:h-[900px] sm:w-[900px] w-[100%] h-[100%] pb-28 -mt-[140px]"
          src={logo}
          alt="Picture of the author"
          width={800}
          height={800}
        />
      </div>
    </section>
  );
};

export default MainHeading;
