import React from "react";
import { LuHome } from "react-icons/lu";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { PiListStarDuotone } from "react-icons/pi";
import { PiCircuitry } from "react-icons/pi";
import { PiPokerChip } from "react-icons/pi";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[136px] h-[489px] rounded-[20px] border-[1px] border-[#a5a5a546] bg-greyRGBA backdrop-blur-[12px] py-8">
      <div className="flex flex-col items-center justify-between h-full ">
        <div
          onClick={() => scrollToSection("hero")}
          className="group text-[#FFFFFF80] flex flex-col transition duration-200 hover:text-white cursor-pointer"
        >
          <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full transition duration-300 group-hover:bg-orangeHover">
            <LuHome className="text-2xl group-hover:text-black" />
          </div>
          <h5 className="font-rubik text-[11px] text-center">Home</h5>
        </div>
        <div
          onClick={() => scrollToSection("about")}
          className="group text-[#FFFFFF80] flex flex-col transition duration-200 hover:text-white cursor-pointer"
        >
          <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full transition duration-300 group-hover:bg-orangeHover">
            <HiOutlineInformationCircle className="text-2xl group-hover:text-black" />
          </div>
          <h5 className="font-rubik text-[11px] text-center">About</h5>
        </div>
        <div
          onClick={() => scrollToSection("features")}
          className="group text-[#FFFFFF80] flex flex-col transition duration-200 hover:text-white cursor-pointer"
        >
          <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full transition duration-300 group-hover:bg-orangeHover">
            <PiListStarDuotone className="text-2xl group-hover:text-black" />
          </div>
          <h5 className="font-rubik text-[11px] text-center">Features</h5>
        </div>
        <div
          onClick={() => scrollToSection("application")}
          className="group text-[#FFFFFF80] flex flex-col transition duration-200 hover:text-white cursor-pointer"
        >
          <div className="w-[44px] h-[44px] flex justify-center mx-auto items-center rounded-full transition duration-300 group-hover:bg-orangeHover">
            <PiCircuitry className="text-2xl group-hover:text-black" />
          </div>
          <h5 className="font-rubik text-[11px] text-center">
            Ai Applications
          </h5>
        </div>
        <div
          onClick={() => scrollToSection("tokenomics")}
          className="group text-[#FFFFFF80] flex flex-col transition duration-200 hover:text-white cursor-pointer"
        >
          <div className="w-[44px] h-[44px] flex justify-center mx-auto  items-center rounded-full transition duration-300 group-hover:bg-orangeHover">
            <PiPokerChip className="text-2xl group-hover:text-black mx-auto" />
          </div>
          <h5 className="font-rubik text-[11px] text-center">Tokenomics</h5>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
