import React, { useState } from "react";
import { FiCloudLightning } from "react-icons/fi";
import { motion } from "framer-motion";
import { LuUpload } from "react-icons/lu";
import Image from "next/image";
import DappRobot from "@assets/images/dapp-robot-img.png";
import { PiUpload } from "react-icons/pi";

const Upload: React.FC = () => {
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleUpload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsUploaded(true);
    }, 2000);
  };

  return (
    <div>
      {!showFileUpload && (
        <ShimmerBorderCard onBrowse={() => setShowFileUpload(true)} />
      )}
      {showFileUpload && !isLoading && !isUploaded && (
        <FileDetailCard onUpload={handleUpload} />
      )}
      {isLoading && <LoadingUI />}
      {isUploaded && <UploadSuccessUI />}
    </div>
  );
};

const ShimmerBorderCard: React.FC<{ onBrowse: () => void }> = ({
  onBrowse,
}) => {
  return (
    <div className="relative mx-auto w-[480px] max-[520px]:w-full min-h-[459px]  overflow-hidden rounded-lg  p-0.5 transition-all duration-500 scale-[1.01] bg-slate-800/50">
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px]  p-8 transition-colors duration-500 bg-slate-900 min-h-[459px]">
        <h4 className="font-outspaceFighter text-[27.37px] text-[#FFFFFF]">
          UPLOAD FILE
        </h4>

        <p className="relative z-10 mb-4 w-full font-clashDisplay text-base text-[#FFFFFF] text-center">
          Gorem ipsum dolor sit amet, consectetur
        </p>
        <div className="relative z-10 w-[393px] max-[520px]:w-full h-[258px] rounded-[10px] border-2 border-dashed flex flex-col items-center justify-between py-5 border-[#FFFFFF33]">
          <LuUpload className="text-5xl text-white mx-auto" />
          <p className="text-white font-clashDisplay text-base text-center">
            Drag and drop (image & vedio) file here
          </p>
          <h4 className="font-clashDisplay text-[#404750] text-base text-center">
            or
          </h4>
          <button
            className="bg-orangeHover text-[#000000] font-clashDisplay font-semibold tracking-wider text-[17.78px] rounded-full px-10 py-3"
            onClick={onBrowse}
          >
            Browse
          </button>
        </div>
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br  from-[#009dff8a] via-[#00ffe110] to-[#009dff83] transition-opacity duration-500 opacity-100"
      />
    </div>
  );
};

const FileDetailCard: React.FC<{ onUpload: () => void }> = ({ onUpload }) => {
  return (
    <div className="relative mx-auto lg:w-[930px] md:h-[416px] rounded-lg p-0.5 overflow-hidden transition-all duration-500 mt-10">
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 2.5 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#009dff8a] via-[#00ffe110] to-[#009dff83]  transition-opacity duration-500 opacity-100"
      />
      <div className="w-full h-full rounded-lg shadow-lg  bg-slate-900 flex max-md:flex-col  mx-auto  relative z-10">
        {/* Left section - Image */}
        <div className="md:w-1/2 h-full relative p-6">
          <Image
            src={DappRobot}
            alt="Robot Preview"
            className="w-[441px] h-[318px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-[#FFFFFF] text-xl font-clashDisplay px-2 py-1 rounded max-md:-mb-9">
            Robo 001 (5.3MB)
          </div>
        </div>

        {/* Right section - File Details */}
        <div className="md:w-1/2 h-full p-6 flex flex-col justify-between rounded-full bg-slate-900">
          <h2 className="text-[#FFFFFF] text-[27.37px] font-outspaceFighter tracking-wider mb-4">
            FILE DETAIL
          </h2>

          <form className="flex flex-col gap-4">
            {/* Title Input */}
            <input
              type="text"
              placeholder="Title"
              className="w-full p-3 bg-[#252a36] border-2 border-[#83838333] text-white rounded-md placeholder-[#FFFFFF66] focus:outline-none focus:ring-2 focus:ring-blue-500 font-clashDisplay text-base"
            />

            {/* Video Type Dropdown */}
            <select className="w-full p-3 bg-[#252a36] border-2 border-[#83838333] text-white rounded-md placeholder-[#FFFFFF66] focus:outline-none  font-clashDisplay text-base">
              <option value="" disabled selected>
                Video type
              </option>
              <option value="mp4">MP4</option>
              <option value="mov">MOV</option>
              <option value="avi">AVI</option>
            </select>

            {/* Description Textarea */}
            <textarea
              placeholder="Description"
              className="w-full p-3 bg-[#252a36] border-2 border-[#83838333] text-white rounded-md placeholder-[#FFFFFF66] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24 font-clashDisplay text-base"
            />
          </form>

          {/* Upload Button */}
          <button
            className="bg-orangeHover text-[#000000] w-[166px] font-clashDisplay font-semibold tracking-wider text-[17.78px] rounded-full  py-3 flex items-center justify-center gap-2 max-md:mt-4"
            onClick={onUpload}
          >
            <PiUpload className="text-3xl" /> Upload
          </button>
        </div>
      </div>
    </div>
  );
};

const LoadingUI: React.FC = () => {
  return (
    <div className="container w-screen">
      <div className="relative mx-auto lg:w-[930px] md:h-[416px] rounded-lg p-0.5 overflow-hidden transition-all duration-500 mt-10">
        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          style={{ scale: 2.5 }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-[#009dff8a] via-[#00ffe110] to-[#009dff83]  transition-opacity duration-500 opacity-100"
        />
        <div className="w-full h-[414px] bg-slate-900 rounded-lg shadow-lg flex items-center justify-center mx-auto z-10 relative">
          <div className="flex flex-col items-center">
            <motion.div
              className="w-6 h-6 rounded-full bg-orangeHover mb-4"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
            <h2 className="text-white text-xl font-outspaceFighter tracking-wider">
              UPLOADING...
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const UploadSuccessUI: React.FC = () => {
  return (
    <div className="relative mx-auto lg:w-[930px] md:h-[416px] rounded-lg p-0.5 overflow-hidden transition-all duration-500 mt-10">
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 2.5 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#009dff8a] via-[#00ffe110] to-[#009dff83]  transition-opacity duration-500 opacity-100"
      />
      <div className="h-full bg-slate-900 rounded-lg shadow-lg flex max-md:flex-col mx-auto relative z-10">
        {/* Left section - Image */}
        <div className="md:w-1/2 h-full relative p-6">
          <Image
            src={DappRobot}
            alt="Robot Preview"
            className="w-[441px] h-[318px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-[#FFFFFF] text-xl font-clashDisplay px-2 py-1 rounded max-md:-mb-9">
            Robo 001 (5.3MB)
          </div>
        </div>

        {/* Right section - Success Details */}
        <div className="md:w-1/2 h-full p-6 flex flex-col justify-center bg-slate-900 rounded-lg">
          <h2 className="text-[#FFFFFF] text-[27.37px] font-outspaceFighter tracking-wider mb-4">
            UPLOADED SUCCESSFULLY
          </h2>

          <div className="flex flex-col gap-2 text-white font-clashDisplay text-base bg-[#252a36] p-4 rounded-lg">
            <div className="flex justify-between">
              <span>Title:</span>
              <span>Robo 001</span>
            </div>
            <div className="flex justify-between">
              <span>Type:</span>
              <span>Robotics</span>
            </div>
            <div className="flex justify-between">
              <span>Reward:</span>
              <span>0.00 ABC</span>
            </div>
          </div>

          <button className="bg-orangeHover text-[#000000] w-[166px] mt-6 font-clashDisplay font-semibold tracking-wider text-[17.78px] rounded-full px-10 py-3">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
