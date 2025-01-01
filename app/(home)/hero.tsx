import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import btnimg from "@assets/images/btnimg.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="hero" className="pt-48 min-h-[calc(100vh-100px)] ">
      <div className="container">
        <motion.h5
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-white font-outspaceFighter text-[106px] font-normal text-center max-xl:text-[70px] max-lg:text-7xl max-md:text-4xl max-sm:text-2xl "
        >
          RealW<span className="hero-title">o</span>rld AI
        </motion.h5>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.3,
          }}
          viewport={{ once: true }}
          className="flex justify-center items-center max-lg:mt-5"
        >
          <p className="text-white text-center font-clashDisplay text-2xl font-normal w-[1020px] max-lg:w-full max-sm:text-base">
            RealWorld AI is a decentralized data-collection platform that
            bridges human and machine intelligence, rewarding contributors with
            RWAI tokens for real-world insights.
          </p>
        </motion.div>
        <Link href="/dapp">
          <div className="flex items-center gap-8 cursor-pointer w-fit mx-auto mt-4">
            <div className="relative w-[172px] h-[44px] flex items-center justify-center">
              <Image
                src={btnimg}
                alt="btnimg"
                className="absolute w-full h-full inset-0"
              />
              <div className="relative flex items-center justify-center gap-[10px]">
                <h5 className="text-white font-clashDisplay text-sm font-normal">
                  Dapp
                </h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
