// import React from "react";

// const FileDetailCard: React.FC = () => {
//   return (
//     <div className="w-[930px] h-[416px] bg-gradient-to-r from-gray-900 to-black rounded-lg shadow-lg flex overflow-hidden">
//       {/* Left section - Image */}
//       <div className="w-1/2 h-full relative">
//         <img
//           src="https://via.placeholder.com/465x416" // Replace with actual image URL
//           alt="Robot Preview"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-black/50 px-2 py-1 rounded">
//           Robo 001 (5.3MB)
//         </div>
//       </div>

//       {/* Right section - File Details */}
//       <div className="w-1/2 h-full p-6 flex flex-col justify-between bg-black/70">
//         <h2 className="text-white text-2xl font-bold mb-4">FILE DETAIL</h2>

//         <form className="flex flex-col gap-4">
//           {/* Title Input */}
//           <input
//             type="text"
//             placeholder="Title"
//             className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Video Type Dropdown */}
//           <select className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
//             <option value="" disabled selected>
//               Video type
//             </option>
//             <option value="mp4">MP4</option>
//             <option value="mov">MOV</option>
//             <option value="avi">AVI</option>
//           </select>

//           {/* Description Textarea */}
//           <textarea
//             placeholder="Description"
//             className="w-full p-3 bg-gray-800 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
//           />
//         </form>

//         {/* Upload Button */}
//         <button className="w-full mt-4 p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
//           Upload
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FileDetailCard;
