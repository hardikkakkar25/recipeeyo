import React from 'react';

const Searchbox = () => {
  return (
    <div className="absolute right-24 transform -translate-y-1/2 w-[300px]">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 pl-10 pr-4 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 3a8 8 0 118-8 8 8 0 01-8 8zm0 0l-3 3M11 3l3 3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Searchbox;
