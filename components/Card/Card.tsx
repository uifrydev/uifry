import Image from "next/image";
import React from "react";
import figma from "../../public/assets/icons/figma.svg";
import xd from "../../public/assets/icons/xd.svg";
import Sketch from "../../public/assets/icons/adobe.svg";
import { CardProps } from "../../Interface/interface";
const Card: React.FC<CardProps> = ({ onClick, data }) => {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center h-full flex-col gap-[2rem] group p-[2rem] pb-[3rem] rounded-[1.2rem] group bg-[#ffffff]   `}
    >
      <div className="flex relative border-[2px] border-[#fff] shadowbox ease-linear duration-500 transition-all group-hover:shadow-cardShadowHover rounded-[.8rem] overflow-hidden">
        <Image
          src={
            data?.images?.asset
              ? data?.images?.asset?.url
              : data?.images[0]?.asset?.url
          }
          className="w-full h-full aspect-[5/3.6]"
          width={2000}
          height={1000}
          alt=""
        />
        <div className="flex absolute bottom-[2rem] gap-[.5rem] right-[2rem]">
          {data?.sanityFilter?.Figma && (
            <div className="flex w-[2.9rem] shadow-xl h-[2.9rem] middle rounded-full bg-[#ffffff]">
              <Image alt="" className="" src={figma} />
            </div>
          )}
          {data?.sanityFilter?.XD && (
            <div className="flex w-[2.9rem] h-[2.9rem] shadow-xl rounded-full middle bg-[#ffffff]">
              <Image alt="" className="" src={xd} />
            </div>
          )}
          {data?.sanityFilter?.Sketch && (
            <div className="flex w-[2.9rem] h-[2.9rem] shadow-xl rounded-full middle bg-[#ffffff]">
              <Image alt="" className="" src={Sketch} />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] items-center max-w-[80%]">
        <p className="text-heading one-line-ellipsis text-center text-[1.7rem] satoshi font-700 leading-[2.6rem] ">
          {data?.title}
        </p>
        <p className="text-[#6B7194] font-400 text-[1.4rem] text-center leading-[2.4rem] two-line-ellipsis">
          {data?.description && data?.description}
        </p>
        <p className="text-[#B6B9CE] text-[1.2rem] font-[400] leading-[200%]">
          Added in{" "}
          {/* <span className="border-b-[1px] border-[#B6B9CE]"> */}
            {" "}
            {data?.category || data?.subCategory}
          {/* </span> */}
        </p>
      </div>
    </div>
  );
};

export default Card;
