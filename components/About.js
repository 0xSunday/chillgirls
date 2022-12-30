import React from "react";
import Image from "next/image";
import nft3 from "../public/nft/nft3.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="bg flex flex-col flex-1 sm:px-14 px-6 py-14 sm:py-20 sm:gap-14 gap-4 justify-center text-center sm:text-start "
    >
      <div className="flex items-center justify-center">
        <h1 className="md:text-7xl text-3xl sm:text-5xl  font-bold font-poppins text-red-900">
          CHILL GIRLS BY CHILL
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row flex-1 justify-center items-center sm:gap-8 gap-4">
        <div className="flex flex-col gap-4 ">
          <p className="font-poppins sm:text-[25px] max-w-[500px] font-semibold">
            Chill Girls is the genesis NFT collection created by Chill, and
            represents Chill first major step into the world of web3.
          </p>
          {/* <p className="font-poppins sm:text-[25px] max-w-[500px] font-semibold">
            Chill Girls is a collection of utility enabled NFTS. Chill Girls
            will provide physical business profits to the NFT holders.
          </p>
          <p className="font-poppins sm:text-[25px] max-w-[500px] font-semibold">
            With in few days after mint we will kick off our physical business,
            which revenue will be distributed between holder.
          </p> */}

          <p className="font-poppins text-3xl font-bold text-center text-red-900">
            Mint Soon
          </p>
        </div>
        <div>
          <Image
            className="rounded-2xl "
            src={nft3}
            alt="nft"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
