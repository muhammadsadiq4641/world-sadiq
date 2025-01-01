import React from "react";
import Image from "next/image";
import DappRobot from "@assets/images/claim-robot.png";

const TestModal = () => {
  return (
    <div className="relative mx-auto rounded-lg  overflow-hidden  p-0.5 transition-all duration-500 scale-[1.01] bg-slate-800/50">
      <div className="bg-slate-900 rounded-md min-h-60 max-sm:min-h-full p-3">
        <Image src={DappRobot} alt="DappRobot" className="w-full h-full" />
      </div>
    </div>
  );
};

export default TestModal;
