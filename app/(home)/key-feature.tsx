import Image from "next/image";
import React from "react";
import lineimg from "@assets/images/lineimg.png";
import { motion } from "framer-motion";
import AnimatedWrapper from "@/src/components/animated-wrapper";

const KeyFeature = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div id="features" className="min-h-[calc(100vh-100px)] pt-20">
      <div className="container">
        <AnimatedWrapper>
          <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
            <h5 className="text-white font-outspaceFighter text-5xl font-normal max-lg:text-2xl max-md:text-center max-sm:text-xl">
              Key Features
            </h5>

            <Image src={lineimg} alt="lineimg" className="mt-1" />
          </div>
        </AnimatedWrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mt-8"
        >
          <motion.div
            variants={itemVariants}
            className="w-[561px] h-[259px] rounded-[20px] border border-[#00FFE3] 
          border-opacity-20 backdrop-blur-[5px] bg-[#8D8D8D1A] px-7 max-sm:px-4 pt-5 max-md:w-full"
          >
            <AnimatedWrapper>
              <h5 className="text-white text-2xl max-sm:text-xl font-medium font-clashDisplay">
                Decentralized Data Collection
              </h5>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <p className="text-white font-clashDisplay text-base font-normal mt-2">
                Expand AI’s worldview by gathering diverse, real-world insights
                from every corner of the globe.
              </p>
            </AnimatedWrapper>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-7 max-md:flex-col max-md:gap-0"
          >
            <div
              className="w-[349px] h-[259px] rounded-[20px] border border-[#00FFE3] 
          border-opacity-20 backdrop-blur-[5px] bg-[#8D8D8D1A] px-7 max-sm:px-4 pt-5 mt-5 max-md:w-full"
            >
              <AnimatedWrapper>
                <h5 className="text-white text-2xl max-sm:text-xl font-medium font-clashDisplay max-lg:text-xl">
                  Collaborative Crowdsourcing Model
                </h5>
              </AnimatedWrapper>
              <AnimatedWrapper>
                <p className="text-white font-clashDisplay text-base font-normal mt-2">
                  Unite communities worldwide to refine and expand AI, fostering
                  continuous improvement through collective, real-time
                  participation.
                </p>
              </AnimatedWrapper>
            </div>

            <motion.div
              variants={itemVariants}
              className="w-[488px] h-[259px] rounded-[20px] border border-[#00FFE3] 
          border-opacity-20 backdrop-blur-[5px] bg-[#8D8D8D1A] px-7 max-sm:px-4 pt-5 mt-5 max-md:w-full"
            >
              <AnimatedWrapper>
                <h5 className="text-white text-2xl max-sm:text-xl font-medium font-clashDisplay">
                  Real-Time AI Upgrades
                </h5>
              </AnimatedWrapper>
              <AnimatedWrapper>
                <p className="text-white font-clashDisplay text-base font-normal mt-2">
                  Continuously feed user-generated data into live models,
                  enabling instant improvements and culturally relevant
                  intelligence.
                </p>
              </AnimatedWrapper>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyFeature;
