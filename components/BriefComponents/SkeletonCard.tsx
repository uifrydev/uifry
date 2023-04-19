import React from "react";

const SkeletonCard = () => {
  return (
    <div className="flex cursor-pointer flex-col gap-[1rem]  group p-[2rem] pb-[2.5em] rounded-[1.2rem] group bg-[#ffffff] ">
      <div className="flex relative  border-[2px] border-[#fff] shadowbox ease-linear duration-500 transition-all group-hover:shadow-cardShadowHover rounded-[.8rem] overflow-hidden">
        <div className="w-full h-full aspect-[2/1] bg-gray-300 animate-pulse"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-[1.7rem] w-full bg-gray-300 animate-pulse rounded pb-[1rem]"></div>
        <div className="flex border-border2 flex-col border-t-[1px] pt-[1.2rem] w-full">
          <div className="h-[.1rem] w-full bg-gray-300 animate-pulse rounded pb-[.1rem]"></div>
          <div className="flex flex-col gap-[.4rem] mt-[1rem]">
            <div className="h-[1.7rem] w-full bg-gray-300 animate-pulse rounded pb-[1rem]"></div>
            <div className="h-[1.7rem] w-full bg-gray-300 animate-pulse rounded pb-[1rem]"></div>
            <div className="h-[1.7rem] w-full bg-gray-300 animate-pulse rounded pb-[1rem]"></div>
          </div>

          <div className="flex-1 gap-[1rem] flex flex-col pt-[2rem] mt-[1rem]">
            <div className="flex items-center justify-between">
              <div className="h-[1.4rem] w-1/3 bg-gray-300 animate-pulse rounded"></div>
              <div className="h-[1.4rem] w-1/6 bg-gray-300 animate-pulse rounded"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-[1.4rem] w-1/3 bg-gray-300 animate-pulse rounded"></div>
              <div className="h-[1.4rem] w-1/6 bg-gray-300 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
