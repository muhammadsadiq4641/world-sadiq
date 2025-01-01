import React from "react";
import Image from "next/image";
import lineimg from "@assets/images/lineimg.png";
import ApplicationCardBg from "@assets/images/application-card-img.png";
import { applicationData } from "@/src/utils/data";
import AnimatedWrapper from "@/src/components/animated-wrapper";
import { motion } from "framer-motion";

const Application = () => {
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
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div id="application" className="container mt-20">
      <AnimatedWrapper>
        <div className="max-sm:mx-auto mb-12">
          <h2 className="font-outspaceFighter lg:text-5xl sm:text-3xl text-2xl  text-center text-[#FFFFFF]">
            RealWorld AI Applications
          </h2>
          <Image src={lineimg} alt="lineimg" className="mt-1 mx-auto" />
        </div>
      </AnimatedWrapper>
      <div className="flex max-lg:flex-col items-center justify-between w-full">
        {applicationData.map((item, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            key={item.id}
            className="group max-lg:mt-5"
          >
            <AnimatedWrapper>
              <h2 className="group-hover:text-[#00FFE3] h-[63px] flex items-center text-[#FFFFFF80] font-outspaceFighter group-hover:scale-110 mb-4 text-2xl transition-colors duration-500 w-[341px]">
                {item.header}
              </h2>
            </AnimatedWrapper>
            <div className="relative w-[333px] h-[365px] px-4">
              <Image
                src={ApplicationCardBg}
                alt="card image"
                className="absolute inset-0 w-full h-full xl:opacity-25 group-hover:opacity-100 group-hover:scale-110 transition-opacity duration-500"
              />

              {/* text one  */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 pt-14"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-hover:stroke-[#00FFE3] stroke-[#FFFFFF3B] transition-colors duration-500"
                >
                  <rect
                    x="1.12584"
                    width="14.3608"
                    height="14.3608"
                    transform="matrix(0.717828 -0.696221 0.717828 0.696221 1.19952 12.7956)"
                    strokeWidth="1.5684"
                  />
                  <rect
                    width="9.01099"
                    height="9.01099"
                    transform="matrix(0.717828 -0.696221 0.717828 0.696221 5.84814 12.0117)"
                  />
                </svg>
                <h4 className="text-[#FFFFFF] opacity-75 group-hover:scale-110 group-hover:opacity-100 font-clashDisplay text-[17.74px] font-medium transition-opacity duration-500">
                  {item.title1}
                </h4>
              </motion.div>
              <motion.h4
                variants={itemVariants}
                className="text-[#FFFFFF] opacity-75 group-hover:scale-110 group-hover:opacity-100 ps-7 font-clashDisplay text-[17.74px] transition-opacity duration-500"
              >
                {item.txt1}
              </motion.h4>

              {/* text two */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 mt-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-hover:stroke-[#00FFE3] stroke-[#FFFFFF3B] transition-colors duration-500"
                >
                  <rect
                    x="1.12584"
                    width="14.3608"
                    height="14.3608"
                    transform="matrix(0.717828 -0.696221 0.717828 0.696221 1.19952 12.7956)"
                    strokeWidth="1.5684"
                  />
                  <rect
                    width="9.01099"
                    height="9.01099"
                    transform="matrix(0.717828 -0.696221 0.717828 0.696221 5.84814 12.0117)"
                  />
                </svg>
                <h4 className="text-[#FFFFFF] opacity-75 group-hover:opacity-100  group-hover:scale-110 font-clashDisplay text-[17.74px] font-medium transition-opacity duration-500">
                  {item.title2}
                </h4>
              </motion.div>
              <motion.h4
                variants={itemVariants}
                className="text-[#FFFFFF] opacity-75 group-hover:opacity-100 group-hover:scale-110 ps-7 font-clashDisplay text-[17.74px] transition-opacity duration-500"
              >
                {item.txt2}
              </motion.h4>

              {/* text three */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 mt-10 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="group-hover:stroke-[#00FFE3] stroke-[#FFFFFF3B] transition-colors duration-500"
                >
                  <rect
                    x="1.12584"
                    width="14.3608"
                    height="14.3608"
                    transform="matrix(0.717828 -0.696221 0.717828 0.696221 1.19952 12.7956)"
                    strokeWidth="1.5684"
                  />
                  <rect
                    width="9.01099"
                    height="9.01099"
                    transform="matrix(0.717828 -0.696221 0.717828 0.696221 5.84814 12.0117)"
                  />
                </svg>
                <h4 className="text-[#FFFFFF] opacity-75 group-hover:scale-110 group-hover:opacity-100 font-clashDisplay text-[17.74px] font-medium transition-opacity duration-500">
                  {item.title3}
                </h4>
              </motion.div>
              <motion.h4
                variants={itemVariants}
                className="text-[#FFFFFF] opacity-75 group-hover:scale-110 group-hover:opacity-100 ps-7 font-clashDisplay text-[17.74px] transition-opacity duration-500"
              >
                {item.txt3}
              </motion.h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Application;
