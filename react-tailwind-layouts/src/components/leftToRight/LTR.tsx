import { useState } from "react";

const Ltr = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <button
        className="relative overflow-hidden px-6 py-3 rounded-lg text-white font-medium bg-blue-600 transition-all duration-300 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10">Hover Me</span>
        <div
          className={`absolute top-0 left-0 h-full bg-blue-800 transition-all duration-300 ease-out ${
            isHovered ? "w-full" : "w-0"
          }`}
          style={{
            transformOrigin: "left",
            zIndex: 0,
          }}
        ></div>

        {/* this one is more better */}
      </button>
      <button
        type="button"
        className="relative mt-2 overflow-hidden px-6 py-2 text-white font-semibold border border-blue-500 rounded group"
      >
        <span className="relative z-10">Hover Me</span>
        <span className="absolute left-0 top-0 h-full w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
      </button>

      <div className="mt-3 w-80 h-40 bg-gray-500 rounded-lg animate-shimmer" />


      <div className="mt-3 w-80 h-40 bg-gray-300 rounded-lg animate-wiggle " />   

      <div className="mt-3 w-80 h-40 bg-gray-300 rounded-lg animate-fade-in-scale " />   
    </div>
  );
};

export default Ltr;
