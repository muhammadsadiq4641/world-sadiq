"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { LuHome } from "react-icons/lu";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import {
  PiCircuitry,
  PiListStarDuotone,
  PiPokerChip,
  PiRoadHorizonLight,
} from "react-icons/pi";
import { IoPieChartOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

interface DrawerTypes {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = ({ setShowDrawer }: DrawerTypes) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed flex justify-start items-center inset-0 w-full h-screen bg-black bg-opacity-20 backdrop-blur-sm z-[200]"
      onClick={() => setShowDrawer(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.25 }}
        className="h-full bg-transparent  p-4 w-60 flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[136px] h-[489px] rounded-[20px] border-[1px] border-[#a5a5a546] bg-greyRGBA backdrop-blur-[12px] py-8 relative z-[9999]">
          <div
            onClick={() => setShowDrawer(false)}
            className="absolute top-2 right-4"
          >
            <IoIosClose className="text-2xl text-white" />
          </div>
          <div className="flex flex-col items-center justify-between h-full ">
            <div
              onClick={() => scrollToSection("hero")}
              className="group text-[#FFFFFF80] flex flex-col transition duration-200 text-white cursor-pointer"
            >
              <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full transition duration-300 bg-orangeHover">
                <LuHome className="text-2xl text-black" />
              </div>
              <h5 className="font-rubik text-[11px] text-center">Home</h5>
            </div>
            <div
              onClick={() => scrollToSection("about")}
              className="group text-[#FFFFFF80] flex flex-col transition duration-200 text-white cursor-pointer"
            >
              <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full transition duration-300 bg-orangeHover">
                <HiOutlineInformationCircle className="text-2xl text-black" />
              </div>
              <h5 className="font-rubik text-[11px] text-center">About</h5>
            </div>
            <div
              onClick={() => scrollToSection("features")}
              className="group text-[#FFFFFF80] flex flex-col transition duration-200 text-white cursor-pointer"
            >
              <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full transition duration-300 bg-orangeHover">
                <PiListStarDuotone className="text-2xl text-black" />
              </div>
              <h5 className="font-rubik text-[11px] text-center">Features</h5>
            </div>
            <div
              onClick={() => scrollToSection("application")}
              className="group text-[#FFFFFF80] flex flex-col transition duration-200 text-white cursor-pointer"
            >
              <div className="w-[44px] h-[44px] flex justify-center mx-auto items-center rounded-full transition duration-300 bg-orangeHover">
                <PiCircuitry className="text-2xl text-black" />
              </div>
              <h5 className="font-rubik text-[11px] text-center">
                Ai Applications
              </h5>
            </div>
            <div
              onClick={() => scrollToSection("tokenomics")}
              className="group text-[#FFFFFF80] flex flex-col transition duration-200 text-white cursor-pointer"
            >
              <div className="w-[44px] h-[44px] flex justify-center mx-auto items-center rounded-full transition duration-300 bg-orangeHover">
                <PiPokerChip className="text-2xl text-black" />
              </div>
              <h5 className="font-rubik text-[11px] text-center">Tokenomics</h5>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
