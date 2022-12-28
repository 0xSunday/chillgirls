import React from "react";
import logo from "../public/assets/logo.png";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainHeading = () => {
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 6,
    },
  };
  const items = [
    <h1>MUMBAI</h1>,
    <h1>PARIS</h1>,
    <h1>NEW WORK</h1>,
    <h1>LONDON</h1>,
    <h1>NAIROBI</h1>,
    <h1>HONG KONG</h1>,
    <h1>DUBAI</h1>,
    <h1>SINGAPORE</h1>,
    <h1>ROME</h1>,
    <h1>TOKYO</h1>,
    <h1>MOSCOW</h1>,
  ];

  return (
    <section className="bg flex flex-col  flex-1 sm:px-14 px-6 py-10 sm:py-10 sm:pt-0">
      <div className=" flex flex-col md:flex-row flex-1 ">
        <div className=" flex flex-[50%] flex-col pt-10 items-start ">
          <h1 className="sm:text-[200px] text-[100px] -mt-20 sm:mt-0 font-bold font-rubik sm:-mb-16 text-pink-800">
            CHILL{" "}
          </h1>
          <h1 className="sm:text-[130px] text-[70px] -mt-10 sm:mt-0 font-bold font-rubik  text-pink-800">
            GIRLS
          </h1>
          <p className="font-poppins font-semibold py-3 l sm:text-3x text-xl">
            Part of The AVAX Chill Club, Finding Loyal Owners And The Story
            Begins.
          </p>
          <button className=" flex my-5 py-3 px-8 border sm:ml-auto mr-[60px] text-2xl font-bold border-black gap-2 justify-center text-center rounded-3xl items-center hover:bg-pink-900 hover:text-white z-10">
            <a
              className="flex gap-2 justify-center text-center items-center"
              href="https://discord.gg/zt8Ra3pKJ8"
            >
              Join <FaDiscord />
            </a>
          </button>
        </div>

        <div className="flex flex-[50%] justify-center items-center py-5 z-0 ">
          <Image
            className="sm:h-[900px] sm:w-[900px] w-[100%] h-[100%] pb-28 -mt-[140px]"
            src={logo}
            alt="Picture of the author"
            width={800}
            height={800}
          />
        </div>
      </div>
      <div className="mb-20 sm:-mt-8 -mt-16 ">
        <div className="flex items-center justify-center border-black border-2 text-center bg-pink-900 text-white p-1 sm:p-2 rounded-2xl -rotate-12">
          <AliceCarousel
            infinite
            MobileFriendly
            autoPlay={10000}
            animationDuration={1000}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
          />
        </div>
        <div className="flex sm:-mt-11 -mt-9 items-center justify-center text-center  border-black border-2 bg-pink-900 text-white sm:p-2 p-1 rounded-2xl  rotate-12">
          <AliceCarousel
            infinite={true}
            autoPlay={10000}
            animationDuration={1000}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlayDirection={("ltr", "rtl")}
          />
        </div>
      </div>
    </section>
  );
};

export default MainHeading;
