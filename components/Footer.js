import React from "react";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
const Footer = (props) => {
  return (
    <section id="contect" className={`bg`}>
      <div className=" flex flex-row justify-around border-t-2 border-black sm:px-32 px-6 py-6 sm:py-10 sm:mx-10 mx-5">
        <Link
          href="https://discord.gg/zt8Ra3pKJ8"
          className="text-3xl text-pink-900 hover:text-black"
        >
          <BsDiscord />
        </Link>
        <Link
          href="https://twitter.com/SakuraDreamsNFT"
          className="text-3xl  text-pink-900  hover:text-black"
        >
          <BsTwitter />
        </Link>
        <Link
          href="mailto:chillgirlsavax@gmail.com"
          className="text-3xl   text-pink-900  hover:text-black"
        >
          <AiTwotoneMail />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
