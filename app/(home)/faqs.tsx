"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoAddOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import faqQImg from "@assets/images/small-faq-img.png";
import faqBigImg from "@assets/images/big-faq-img.png";
import { FaqData } from "@/src/utils/data";
import lineimg from "@assets/images/lineimg.png";
import AnimatedWrapper from "@/src/components/animated-wrapper";

interface FaqItem {
  header: string;
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <div className="max-sm:mx-auto mb-12">
            <h2 className="font-outspaceFighter text-5xl text-center text-[#FFFFFF]">
              Faqs
            </h2>
            <Image src={lineimg} alt="lineimg" className="mt-1 mx-auto" />
          </div>
        </AnimatedWrapper>

        <div className="flex justify-end mt-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            className="space-y-6 xl:w-[1141px] mx-auto w-full"
          >
            {FaqData.map((faq: FaqItem, index: number) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className={`relative ${
                  activeIndex === index ? "opacity-100" : "opacity-10"
                } transition-opacity duration-300`}
              >
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  {activeIndex === index ? (
                    <Image
                      src={faqBigImg}
                      alt="Expanded FAQ background"
                      className="w-full lg:h-[160px] max-[470px]:h-[150px]"
                    />
                  ) : (
                    <Image
                      src={faqQImg}
                      alt="Question background"
                      className="w-full lg:h-[120px] object-cover max-[470px]:h-[100px]"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-between sm:px-10 px-3">
                    <div>
                      <h4 className="font-outspaceFighter text-gradient text-lg">
                        {faq.header}
                        <span className="font-clashDisplay font-semibold">
                          {index + 1}
                        </span>
                      </h4>
                      <h3 className="font-outspaceFighter text-white sm:text-[19.24px] text-base ">
                        {faq.question}
                      </h3>
                    </div>
                    {/* {activeIndex === index ? (
                      <FiMinus className="text-[#F2ECE6] sm:text-4xl" />
                    ) : (
                      <IoAddOutline className="text-[#F2ECE6] sm:text-4xl" />
                    )} */}
                  </div>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="sm:px-10 p-3">
                        <p className="text-white font-clashDisplay sm:text-[19.24px] text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
