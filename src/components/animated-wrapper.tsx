import React from "react";
import { motion } from "framer-motion";

type AnimatedWrapperProps = {
  children: React.ReactNode;
  initialY?: number; // Allow customization of the initial Y position
  duration?: number; // Allow customization of the animation duration
  once?: boolean; // Allow customization of the viewport "once" property
};

const AnimatedWrapper = ({
  children,
  initialY = 50,
  duration = 0.6,
  once = true,
}: AnimatedWrapperProps) => {
  return (
    <motion.div
      initial={{ y: initialY, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
