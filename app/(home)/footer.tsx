import React from "react";
import Image from "next/image";
import Logo from "@assets/images/logo.png";
import X from "@assets/images/x.png";
import Telegram from "@assets/images/telegram.png";
import Etherscan from "@assets/images/etherscan.png";
import Dextool from "@assets/images/dextool.png";
import AnimatedWrapper from "@/src/components/animated-wrapper";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <AnimatedWrapper>
      <div className="container mb-10 overflow-clip relative z-[999]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="17"
          viewBox="0 0 1920 17"
          fill="none"
          className="mb-4"
        >
          <path
            d="M1926 16.2283H1218L1195.7 1H727.842L703.614 16.2283H-4.5"
            stroke="url(#paint0_linear_72_4902)"
            stroke-opacity="0.4"
            stroke-width="1.00936"
          />
          <defs>
            <linearGradient
              id="paint0_linear_72_4902"
              x1="1926"
              y1="8.61414"
              x2="-4.5"
              y2="8.61414"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#01FFE3" stop-opacity="0" />
              <stop offset="0.508942" stop-color="#01FFE3" />
              <stop offset="1" stop-color="#01FFE3" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex max-[620px]:flex-col max-[620px]:gap-y-5 items-center justify-between">
          <Image src={Logo} alt="logo" />
          <div>
            <p className="text-white text-sm font-medium">
              © <span className="underline">Realworld AI</span> {currentYear}.
              All rights reserved.
            </p>
          </div>
          <div className="flex items-center justify-center md:gap-5 gap-3">
            <Image
              src={X}
              alt="twiiter"
              className="cursor-pointer max-md:w-[30px] max-[620px]:w-full"
            />
            <Image
              src={Telegram}
              alt="telegram"
              className="cursor-pointer max-md:w-[30px] max-[620px]:w-full"
            />
            <Image
              src={Etherscan}
              alt="etherscan"
              className="cursor-pointer max-md:w-[30px] max-[620px]:w-full"
            />
            <Image
              src={Dextool}
              alt="dextool"
              className="cursor-pointer max-md:w-[30px] max-[620px]:w-full"
            />
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default Footer;
