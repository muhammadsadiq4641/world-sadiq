import React from "react";
import lineimg from "@assets/images/lineimg.png";
import Image from "next/image";
import TokenomicsBg from "@assets/images/tokenomics-bg.png";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedWrapper from "@/src/components/animated-wrapper";
import { motion } from "framer-motion";

const Tokenomics = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div id="tokenomics" className="container">
      <AnimatedWrapper>
        <div className="max-md:flex max-md:flex-col mb-20 max-md:justify-center max-md:items-center">
          <h5 className="text-white font-outspaceFighter text-5xl font-normal max-lg:text-2xl max-md:text-center max-sm:text-xl">
            TOkenomics
          </h5>

          <Image src={lineimg} alt="lineimg" className="mt-1" />
        </div>
      </AnimatedWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex max-[540px]:flex-col max-[540px]:gap-y-14 items-center justify-between"
      >
        {/* card one  */}
        <AnimatedWrapper>
          <div className="relative w-[238px] h-[239px] p-4 pt-7">
            <Image
              src={TokenomicsBg}
              alt="TokenomicsBg"
              className="absolute inset-0 w-full h-full"
            />
            <div className="pt-4">
              <motion.h4
                variants={itemVariants}
                className="text-white font-outspaceFighter text-sm"
              >
                Liquidity Pool
              </motion.h4>
              <motion.p
                variants={itemVariants}
                className="font-clashDisplay text-[13px] mt-3 text-white"
              >
                9,900,000 RWAI (90% of total supply)
              </motion.p>
            </div>
            <motion.div
              variants={itemVariants}
              className="mt-7 flex justify-end"
            >
              <div className="w-[84px]">
                <CircularProgressbar
                  value={90}
                  text={`${90}%`}
                  styles={buildStyles({
                    // Colors
                    pathColor: "#00FFE3",
                    textColor: "#FFFFFF",
                    trailColor: "#00FFE31A",
                    backgroundColor: "#1E293B",
                  })}
                  className="font-outspaceFighter"
                />
              </div>
            </motion.div>
          </div>
        </AnimatedWrapper>
        <div className="space-y-14">
          {/* card two  */}
          <AnimatedWrapper>
            <div className="relative w-[238px] h-[239px] p-4 pt-7">
              <Image
                src={TokenomicsBg}
                alt="TokenomicsBg"
                className="absolute inset-0 w-full h-full"
              />
              <div className="pt-4">
                <motion.h4
                  variants={itemVariants}
                  className="text-white font-outspaceFighter text-sm"
                >
                  Development, Team & Marketing
                </motion.h4>
                <motion.p
                  variants={itemVariants}
                  className="font-clashDisplay text-[13px] mt-3 text-white"
                >
                  715,000 RWAI (6.5% of total supply)
                </motion.p>
              </div>
              <motion.div
                variants={itemVariants}
                className="mt-7 flex justify-end"
              >
                <div className="w-[84px]">
                  <CircularProgressbar
                    value={6.5}
                    text={`${6.5}%`}
                    styles={buildStyles({
                      // Colors
                      pathColor: "#00FFE3",
                      textColor: "#FFFFFF",
                      trailColor: "#00FFE31A",
                      backgroundColor: "#1E293B",
                    })}
                    className="font-outspaceFighter"
                  />
                </div>
              </motion.div>
            </div>
          </AnimatedWrapper>

          {/* card three  */}

          <AnimatedWrapper>
            <div className="relative w-[238px] h-[239px] p-4 pt-7">
              <Image
                src={TokenomicsBg}
                alt="TokenomicsBg"
                className="absolute inset-0 w-full h-full"
              />
              <div className="pt-4">
                <motion.h4
                  variants={itemVariants}
                  className="text-white font-outspaceFighter text-sm"
                >
                  Advisors, Community Rewards & Emergency Reserve
                </motion.h4>
                <motion.p
                  variants={itemVariants}
                  className="font-clashDisplay text-[13px] text-white mt-3"
                >
                  385,000 RWAI (3.5% of total supply)
                </motion.p>
              </div>
              <motion.div
                variants={itemVariants}
                className="mt-7 flex justify-end"
              >
                <div className="w-[84px]">
                  <CircularProgressbar
                    value={3.5}
                    text={`${3.5}%`}
                    styles={buildStyles({
                      // Colors
                      pathColor: "#00FFE3",
                      textColor: "#FFFFFF",
                      trailColor: "#00FFE31A",
                      backgroundColor: "#1E293B",
                    })}
                    className="font-outspaceFighter"
                  />
                </div>
              </motion.div>
            </div>
          </AnimatedWrapper>
        </div>
      </motion.div>
      <div className="flex items-center justify-center flex-col w-full gap-4 mt-20">
        <AnimatedWrapper>
          <h4 className="font-outspaceFighter text-[15.1px] text-white text-center">
            TOTAL SUPPLY
          </h4>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <h2 className="text-gradient lg:text-4xl text-2xl max-[500px]:text-xl text-center font-outspaceFighter">
            11,000,000 RWAI (100% of total supply)
          </h2>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Tokenomics;
