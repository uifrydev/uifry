import React from 'react'

const SkeletonJobCard = () => {
  return (
    <div className="p-[3rem] flex flex-col gap-[1.6rem] rounded-[1.2rem] bg-[#fff]">
    <div className="flex justify-between items-center">
      <div className="w-[5.4rem] h-[5.4rem] rounded-full bg-gray-300 animate-pulse"></div>
      <div className="flex flex-col gap-[.4rem]">
        <div className="h-[1.2rem] bg-gray-300 rounded-full animate-pulse"></div>
        <div className="h-[1.4rem] w-[8rem] bg-gray-300 rounded-full animate-pulse"></div>
      </div>
    </div>
    <div className="h-[1.8rem] w-full max-w-[20rem] bg-gray-300 rounded-full animate-pulse"></div>
    <div className="h-[6rem] bg-gray-300 rounded-lg animate-pulse"></div>
    <div className="flex gap-[1.3rem] flex-col">
      <div className="h-[1.8rem] w-[8rem] bg-gray-300 rounded-full animate-pulse"></div>
      <div className="flex gap-[2rem]">
        <div className="flex gap-[0.7rem]">
          <div className="w-[1.4rem] h-[1.4rem] rounded-full bg-gray-300 animate-pulse"></div>
          <div className="h-[1.4rem] w-[5rem] bg-gray-300 rounded-full animate-pulse"></div>
        </div>
        <div className="flex gap-[0.7rem]">
          <div className="w-[1.4rem] h-[1.4rem] rounded-full bg-gray-300 animate-pulse"></div>
          <div className="h-[1.4rem] w-[5rem] bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SkeletonJobCard