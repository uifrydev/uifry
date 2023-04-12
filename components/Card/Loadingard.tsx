import React from "react";

const LoadingCard = () => {
  return (
    <div className="bg-gray-200 rounded-xl p-8 min-h-[50rem] animate-pulse">
      <div className="bg-gray-300 h-[70%] rounded-lg mb-4"></div>
      <div className="bg-gray-300 h-4 w-40 mb-4 mx-auto"></div>
      <div className="bg-gray-300 h-4 w-64 mb-4 mx-auto"></div>
      <div className="bg-gray-300 h-4 w-40 mx-auto"></div>
      <div className="absolute right-8 bottom-8">
        <div className="bg-gray-300 h-8 w-8 rounded-full inline-flex mr-2"></div>
        <div className="bg-gray-300 h-8 w-8 rounded-full inline-flex mr-2"></div>
        <div className="bg-gray-300 h-8 w-8 rounded-full inline-flex"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
