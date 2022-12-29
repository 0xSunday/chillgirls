import React, { useEffect, useState } from "react";
import Image from "next/image";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { nftImages } from "../Data";
const NFT = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    nftImages ? setAuth(true) : setAuth(false);
  }, []);

  const responsive = {
    0: {
      items: 2,
    },
    612: {
      items: 4,
    },
    800: {
      items: 6,
    },
  };
  const items = nftImages.map((nft) => (
    <div className="flex items-center justify-center px-5 zoom">
      <Image
        className="rounded-2xl my-5 "
        src={`/${nft.image}`}
        key={nft.id}
        alt={nft.alt}
        width={200}
        height={200}
      />
    </div>
  ));
  return (
    <section id="nft" className="bg flex flex-col flex-1 py-14 sm:py-20 px-6 ">
      <div className="flex flex-col justify-center items-center text-center sm:gap-8 gap-5 w-full pb-5 ">
        <h1 className="md:text-[80px] sm:pb-9 sm:text-5xl text-3xl font font-poppins  text-red-900 font-bold">
          MEET THE CHILL GIRLS
        </h1>
        <p className=" sm:text-[30px] flex justify-center items-center font-poppins font-semibold sm:max-w-[700px] text-center ">
          All Chill girls are equal, but some are more equal than others.
          Cherry-picked from over a billion combinations, most are badass, some
          are lavish, and few are iconic!
        </p>

        <p className=" sm:text-[30px] flex justify-center items-center font-poppins font-semibold sm:max-w-[700px] text-center ">
          Blood makes you related, loyalty makes you family. When you HODL a
          Chill Girl, you hold power backed by thousands of family members.
        </p>
      </div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay={1000}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
      />
    </section>
  );
};

export default NFT;
