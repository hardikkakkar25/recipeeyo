import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Outer Ring */}
        <div className="absolute w-full h-full border-4 border-t-transparent border-b-transparent border-orange-400 rounded-full animate-spin"></div>
        {/* Middle Ring */}
        <div className="absolute w-20 h-20 border-4 border-t-transparent border-b-transparent border-yellow-400 rounded-full animate-spin delay-200"></div>
        {/* Inner Ring */}
        <div className="absolute w-16 h-16 border-4 border-t-transparent border-b-transparent border-red-500 rounded-full animate-spin delay-400"></div>
        {/* Center Dot */}
        <div className="absolute w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
