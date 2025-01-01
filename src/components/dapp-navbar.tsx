import React, { useState } from "react";
import logo from "@assets/images/logo.png";
import Image from "next/image";
import btnimg from "@assets/images/btnimg.png";

const DappNavbar = () => {
  return (
    <div className="py-5 sticky inset-0  w-full h-full z-10">
      <div className="container">
        <div className="flex justify-between items-center">
          <Image src={logo} alt="logo" />
          <div className="flex items-center gap-8 cursor-pointer">
            <div className="relative w-[172px] h-[44px] flex items-center justify-center">
              <Image
                src={btnimg}
                alt="btnimg"
                className="absolute w-full h-full inset-0"
              />
              <div className="relative flex items-center justify-center gap-[10px]">
                <h5 className="text-white font-clashDisplay text-sm font-normal">
                  Connect Wallet
                </h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <g clipPath="url(#clip0_12_294)">
                    <path
                      d="M4.47665 15.9267C5.56907 17.0192 6.96089 17.7631 8.47611 18.0645C9.99133 18.3659 11.5619 18.2112 12.9892 17.62C14.4165 17.0288 15.6365 16.0276 16.4948 14.7431C17.3531 13.4585 17.8112 11.9483 17.8112 10.4034C17.8112 8.85849 17.3531 7.34827 16.4948 6.06373C15.6365 4.77919 14.4165 3.77801 12.9892 3.1868C11.5619 2.59559 9.99133 2.4409 8.47611 2.7423C6.96089 3.04369 5.56907 3.78764 4.47665 4.88005C3.01379 6.34601 2.19222 8.33241 2.19223 10.4034C2.19223 12.4744 3.01379 14.4608 4.47665 15.9267ZM8.72538 7.67784L12.1244 7.67784C12.2033 7.67779 12.2815 7.69331 12.3545 7.72351C12.4274 7.75371 12.4937 7.79799 12.5496 7.85383C12.6054 7.90966 12.6497 7.97595 12.6799 8.04891C12.7101 8.12187 12.7256 8.20007 12.7256 8.27903L12.7256 11.678C12.7256 11.8375 12.6622 11.9904 12.5495 12.1031C12.4367 12.2159 12.2838 12.2792 12.1244 12.2792C11.9649 12.2792 11.812 12.2159 11.6993 12.1031C11.5865 11.9904 11.5232 11.8375 11.5232 11.678L11.5237 9.72944L8.30051 12.9526C8.18782 13.0653 8.03499 13.1286 7.87563 13.1286C7.71628 13.1286 7.56344 13.0653 7.45076 12.9526C7.33808 12.8399 7.27477 12.6871 7.27477 12.5278C7.27477 12.3684 7.33808 12.2156 7.45076 12.1029L10.674 8.87969L8.72538 8.88023C8.56593 8.88023 8.41302 8.81689 8.30027 8.70414C8.18752 8.59139 8.12418 8.43848 8.12418 8.27903C8.12418 8.11959 8.18752 7.96667 8.30027 7.85392C8.41301 7.74118 8.56593 7.67784 8.72538 7.67784Z"
                      fill="#00FFE3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12_294">
                      <rect
                        width="19.2275"
                        height="19.2275"
                        fill="white"
                        transform="translate(0.38623 0.789619)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DappNavbar;
