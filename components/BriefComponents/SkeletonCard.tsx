import React from 'react'

const SkeletonCard = () => {
  return (
    <div
  className="flex cursor-pointer flex-col gap-[1rem]  group p-[2rem] pb-[2.5em] rounded-[1.2rem] group bg-[#ffffff] "
>
  <div className="flex relative  border-[2px] border-[#fff] shadowbox ease-linear duration-500 transition-all group-hover:shadow-cardShadowHover rounded-[.8rem] overflow-hidden">
    <div className="w-full h-full aspect-[2/1] bg-gray-300 animate-pulse"></div>
  </div>
  <div className="flex flex-col items-center">
    <div className="h-[1.7rem] w-full bg-gray-300 animate-pulse rounded pb-[1rem]"></div>
    <div className="flex border-border2 flex-col border-t-[1px] pt-[1.2rem]">
      <div className="h-[1.4rem] w-3/4 bg-gray-300 animate-pulse rounded pb-[.4rem]"></div>
      <div className="flex-1 gap-[1rem] flex flex-col pt-[2rem] mt-[1rem]">
        <div className="flex items-center justify-between">
          <div className="h-[1.4rem] w-1/4 bg-gray-300 animate-pulse rounded"></div>
          <div className="h-[1.4rem] w-1/4 bg-gray-300 animate-pulse rounded"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-[1.4rem] w-1/4 bg-gray-300 animate-pulse rounded"></div>

          <div className="flex items-center gap-[.5rem]">
            <div className="h-[1.4rem] w-1/4 bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse rounded"></div>
            <div className="w-9 h-10">
              <div className="h-[1px] w-4/5 bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse mb-[.5rem]"></div>
              <div className="h-[1px] w-2/5 bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default SkeletonCard