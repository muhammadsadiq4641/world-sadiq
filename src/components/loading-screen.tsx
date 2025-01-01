"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type LoadingScreenProps = {
  setShowLoader: (value: boolean) => void;
  handlePlayMusic: () => void;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  setShowLoader,
  handlePlayMusic,
}) => {
  return (
    <motion.div
      className="relative inset-0 z-20 w-full h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1, duration: 4 }}
    >
      <div className="flex justify-center items-center h-full">
        <motion.div
          animate={{
            scale: [1, 1.05, 1.05, 1, 1],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="text-center cursor-pointer"
        >
          <h5
            className="text-white font-outspaceFighter leading-tight text-[106px] font-normal text-center max-xl:text-[74px
        ] max-lg:text-7xl max-md:text-4xl max-sm:text-3xl "
          >
            RealW<span className="hero-title">o</span>rld AI
          </h5>
          <p className="text-[#ffffffb6] font-clashDisplay max-sm:px-4 md:text-2xl text-base text-center ">
            Hold tight, we're building your connection to the real world...
          </p>
          <div
            onClick={() => {
              setShowLoader(false);
              handlePlayMusic();
            }}
            className="flex items-center justify-center border-2 w-fit mx-auto md:px-8 px-6 md:py-4 py-2  mt-6 rounded-full btn-gradient"
          >
            <p className="text-white font-clashDisplay font-medium md:text-2xl text-xl text-center">
              Enter the World
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
