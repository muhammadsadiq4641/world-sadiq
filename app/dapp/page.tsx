"use client";
import React, { useState } from "react";
import DappWorld from "@assets/images/dapp-world-bg.png";
import Upload from "./upload";
import Claimable from "./claimable";
import DappNavbar from "@/src/components/dapp-navbar";
import Image from "next/image";
import { LuHome } from "react-icons/lu";
import { PiMoneyWavyFill } from "react-icons/pi";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"upload" | "claims">("upload");

  return (
    <div className="relative min-h-screen max-md:pb-10">
      <Image
        src={DappWorld}
        alt="world image"
        className="absolute right-0 bottom-0"
      />
      <div className="container">
        <div className="min-h-screen text-white flex flex-col items-center justify-start pt-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
            <DappNavbar />
          </div>

          <div className="h-[106px] min-w-[217px] rounded-[20px] border-[1px] border-[#a5a5a546] bg-greyRGBA backdrop-blur-[12px] py-8 flex items-center justify-center lg:mb-10 mb-8 gap-x-7">
            <div
              onClick={() => setActiveTab("upload")}
              className=" text-[#FFFFFF80] flex flex-col transition duration-200 hover:text-white cursor-pointer"
            >
              <div
                className={`w-[44px] h-[44px] flex justify-center items-center rounded-full transition duration-300 
                ${
                  activeTab === "upload"
                    ? "bg-orangeHover text-black"
                    : "bg-transparent"
                }
                `}
              >
                <LuHome className="text-2xl" />
              </div>
              <h5
                className={`font-rubik text-[11px] text-center
                ${activeTab === "upload" ? "text-white" : ""}
                `}
              >
                Upload
              </h5>
            </div>

            <div
              onClick={() => setActiveTab("claims")}
              className=" text-[#FFFFFF80] flex flex-col  transition duration-200 hover:text-white cursor-pointer"
            >
              <div
                className={`w-[44px] h-[44px] ms-1 flex justify-center items-center rounded-full transition duration-300 
                ${
                  activeTab === "claims"
                    ? "bg-orangeHover text-black"
                    : "bg-transparent"
                }
                `}
              >
                <PiMoneyWavyFill className="text-2xl" />
              </div>
              <h5
                className={`font-rubik text-[11px] text-center
                ${activeTab === "claims" ? "text-white" : ""}
                `}
              >
                Claimable
              </h5>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "upload" && <Upload />}

          {activeTab === "claims" && <Claimable />}
        </div>
      </div>
    </div>
  );
};

export default App;
