import React from "react";

const LoadingUIUXCard = () => {
  return (
    <div className="flex flex-col gap-[2rem] max-h-[60rem] group p-[2rem] pb-[2.5rem] rounded-[1.2rem] group bg-[#ffffff] loading">
      <div className="bg-gray-300 h-[75%] rounded-lg mb-4 animate-pulse min-h-[30rem]"></div>
      {/* <div className="flex relative border-[2px] border-[#fff] shadowbox ease-linear duration-500 transition-all group-hover:shadow-cardShadowHover rounded-[.8rem] overflow-hidden">
        <div className="w-full h-full bg-gray-300 animate-pulse"></div>
      </div> */}
      <div className="flex items-center justify-between gap-[2rem] w-full">
        <div className="bg-gray-300 h-4 w-80 mb-4 mr-auto rounded-full"></div>
        <div className="flex gap-[.5rem]">
          <div className="flex w-[2.8rem] shadow-2xl border-[0.864051px] border-border2 h-[2.8rem] middle rounded-full bg-[#ffffff] animate-pulse"></div>
          <div className="flex w-[2.8rem] h-[2.8rem] rounded-full border-[0.864051px] border-border2 middle bg-[#ffffff] animate-pulse"></div>
          <div className="flex w-[2.8rem] h-[2.8rem] rounded-full border-[0.864051px] border-border2 middle bg-[#ffffff] animate-pulse"></div>
        </div>
      </div>
      <div className="flex border-border2 xl:flex-col border-t-[1px] pt-[1.2rem]">
        <div className="flex flex-col w-[50%]">
          <div className="bg-gray-300 h-4 w-[90%] mb-4 mr-auto rounded-full animate-pulse"></div>
          <div className="bg-gray-300 h-4 w-[85%] mb-4 mr-auto rounded-full animate-pulse"></div>
          <div className="bg-gray-300 h-4 w-[90%] mb-4 mr-auto rounded-full animate-pulse"></div>
        </div>

        <div className="flex-1 gap-[1rem] flex flex-col pl-[2.5rem] xl:pt-[2rem]  xl:border-t-[1px] xl:mt-[1rem]">
          <div className="flex items-center justify-between">
          <div className="bg-gray-300 h-4 w-28 mb-4 mr-auto rounded-full  animate-pulse"></div>

          <div className="bg-gray-300 h-4 w-6 mb-4  rounded-full animate-pulse"></div>

          </div>
          <div className="flex items-center justify-between">
          <div className="bg-gray-300 h-4 w-48 mb-4 mr-auto rounded-full animate-pulse"></div>

          <div className="bg-gray-300 h-4 w-16 mb-4  rounded-full animate-pulse"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingUIUXCard;
