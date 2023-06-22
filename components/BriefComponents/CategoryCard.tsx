import {  CategoryCardProps, Data } from "@/Interface/interface";
import Image from "next/image";
import React from "react";

const CategoryCard = ({ data }: { data: CategoryCardProps }) => {
  console.log({ data });
  return (
    // <div className='bg-[#fff] rounded-[1.2rem] p-[3rem]'>
    <div className="flex cursor-pointer flex-col h-full gap-[1rem]  group p-[2rem] pb-[2.5em] rounded-[1.2rem] group bg-[#ffffff] ">
      <div className="flex relative  border-[2px] border-[#fff] shadowbox ease-linear duration-500 transition-all group-hover:shadow-cardShadowHover rounded-[.8rem] overflow-hidden">
        <Image
          src={data?.coverImage?.asset?.url || data?.images[0]?.asset?.url}
          className="w-full h-full aspect-[2/1]"
          width={2700}
          height={900}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-heading text-[1.7rem] satoshi font-700 leading-[150%] pt-[1rem] w-full pb-[1rem]">
          {data.title || "Real Estate Thank You Page"}
        </p>
        <div className="flex border-border2 flex-col border-t-[1px] pt-[1.2rem]">
          <p className="text-secondaryGray three-line-ellipsis flex-1 pr-[2.5rem]  font-400 pb-[.4rem] text-[1.4rem] leading-[2.4rem]">
            {data.description ||
              "Captures visitor information, such as email addresses, for lead generation and list building."}
          </p>
          <div className="flex-1 gap-[1rem] flex flex-col pt-[2rem] mt-[1rem]">
            <div className="flex items-center justify-between">
              <span className="text-secondaryGray leading-[2.1rem] font-400 text-[1.4rem]">
                Category{" "}
              </span>
              <span className="text-primaryBlack leading-[2.1rem] font-400 text-[1.4rem]">
                {data.subCategories}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondaryGray leading-[2.1rem] font-400 text-[1.4rem]">
                Inclusions
              </span>

              <div className="flex items-center gap-[.5rem]">
                <span className="gradient-text leading-[2.1rem] font-400 text-[1.4rem]">
                  start
                </span>
                <svg
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 2.14966H1.5C1.23478 2.14966 0.98043 2.25502 0.792893 2.44255C0.605357 2.63009 0.5 2.88444 0.5 3.14966V8.14966C0.5 8.41487 0.605357 8.66923 0.792893 8.85676C0.98043 9.0443 1.23478 9.14966 1.5 9.14966H6.5C6.76522 9.14966 7.01957 9.0443 7.20711 8.85676C7.39464 8.66923 7.5 8.41487 7.5 8.14966V6.14966M5.5 1.14966H8.5M8.5 1.14966V4.14966M8.5 1.14966L3.5 6.14966"
                    stroke="url(#paint0_linear_417_33101)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_417_33101"
                      x1="8.5"
                      y1="1.14966"
                      x2="-0.699414"
                      y2="2.92119"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00B3FF" />
                      <stop offset="1" stopColor="#293FFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
