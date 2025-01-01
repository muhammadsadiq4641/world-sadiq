import React from "react";
import { motion } from "framer-motion";

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
      </div>
    </div>
  );
};

export default Hero;
