import React from "react";
import lineimg from "@assets/images/lineimg.png";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedWrapper from "@/src/components/animated-wrapper";

const Mission = () => {
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

  const data = [
    {
      id: 1,
      category: "Urban Infrastructure",
      description: `Landmarks, buildings, architecture`,
      rewards: "1.2x",
    },
    {
      id: 2,
      category: "Public Spaces",
      description: `City centers, parks, community hubs`,
      rewards: "1.0x",
    },
    {
      id: 3,
      category: "Transportation",
      description: `Transit stations, traffic patterns`,
      rewards: "1.1x",
    },
    {
      id: 4,
      category: "Cultural Events",
      description: `Festivals, local markets, gatherings`,
      rewards: "1.3x",
    },
    {
      id: 5,
      category: "Environmental",
      description: `Natural areas, weather and climate data`,
      rewards: "1.15x",
    },
  ];

  return (
    <div id="about" className="min-h-[calc(100vh-100px)] pt-20">
      <div className="container">
        <AnimatedWrapper>
          <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
            <h5 className="text-white font-outspaceFighter text-3xl font-normal max-lg:text-2xl max-md:text-center max-sm:text-xl">
              Maximize Your Rewards with RealWorld AI
            </h5>

            <Image src={lineimg} alt="lineimg" className="mt-1" />
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <p className="text-white text-2xl font-clashDisplay font-normal mt-10 w-[727px] max-md:w-full max-md:text-center max-sm:text-base">
            Earn more by contributing data in key categories. Each upload earns
            RWAI tokens multiplied by the reward weight below:
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="mt-10 w-[847px] min-h-[285px] rounded-[20px] border
         border-[#00FFE3] border-opacity-20 backdrop-blur-[5px] bg-[#8D8D8D0A] px-5 max-lg:w-full pb-5"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center pt-4"
            >
              <h5 className="text-white font-clashDisplay text-xl max-md:text-[12px] font-medium text-start flex-1">
                Category
              </h5>
              <h5 className="text-white font-clashDisplay text-xl max-md:text-[12px] font-medium text-center flex-1">
                Description
              </h5>
              <h5 className="text-white font-clashDisplay text-xl max-md:text-[12px] font-medium text-end flex-1">
                Reward Weight
              </h5>
            </motion.div>
            <div>
              {data.map((item) => (
                <motion.div
                  variants={itemVariants}
                  key={item.id}
                  className="flex items-center mt-4  max-md:items-start"
                >
                  <h5 className="text-white  text-lg max-md:text-[10px] max-md:leading-4 font-medium flex-1 text-start break-words break-all ">
                    {item.category}
                  </h5>
                  <h5 className="text-white  text-lg max-md:text-[10px] max-md:leading-4 font-medium flex-2 max-md:flex-1 text-center break-words break-all ">
                    {item.description}
                  </h5>
                  <h5 className="text-white  text-lg max-md:text-[10px] font-medium flex-1 text-end break-words break-all ">
                    {item.rewards}
                  </h5>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Mission;
