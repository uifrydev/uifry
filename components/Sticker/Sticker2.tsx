import Image from "next/image";
import React from "react";
import drop from "../../public/assets/images/drop.png";
import gradient from "../../public/assets/images/gradient.png";
import drop1 from "../../public/assets/images/drop1.png";
import gradient1 from "../../public/assets/images/gradient1.png";
import gradient2 from "../../public/assets/images/gradient2.png";
const CountdownTimer = dynamic(() => import("../Timer"), { ssr: false });
import { headerHeight, smallHeaderHeight } from "@/utils/consts";
import dynamic from "next/dynamic";
const Sticker2 = ({ classes = "" }: { classes: string }) => {
  return (
    <div
      id="sticker"
      className={`w-full flex z-[11] bg-[#002D6A] xs1:p-[1rem] pr-[1rem] justify-center xs1:py-[1rem] gap-[2rem] xs1:h-[${smallHeaderHeight}rem] h-[${headerHeight}rem] sticky top-0 py-[0rem] overflow-hidden px-[0rem] items-center rounded-full bg-[#] ${classes}`}
    >
      <div className="relative flex h-full justify-center items-center w-full max-w-[170rem]">
        <div className="flex xs1:flex-col items-center gap-[1rem]  z-[12]">
          <span className="text-[#fff] xs1:flex-col items-center gap-[1rem] 330:text-[1.4rem] flex pl-[5rem] pr-[2rem] xs1:p-0 font-[700] text-[1.6rem] satoshi">
            Get 50% Off | Launch Sale
            <CountdownTimer futureTime={new Date("2023-06-30T15:30:00")} />
            <span className="md:hidden">Today Only!</span>
          </span>
          <button className="py-[0.68rem] px-[1.54rem] rounded-full bg-[#09B673] satoshi text-[1rem] font-900 leading-[1.5rem] text-[#fff] ">
            Claim Offer
          </button>
        </div>
        <div className="">
          <Image
            src={drop}
            className="absolute top-0 flex lg:hidden right-[0%] h-full z-[1]"
            alt=""
          />
          <Image
            src={gradient}
            className="absolute top-0 right-[5%] lg:hidden h-full object-cover"
            alt=""
          />
          <Image
            src={gradient2}
            className="absolute top-0 lg:hidden left-[0%] h-full object-cover"
            alt=""
          />
          <Image
            src={drop1}
            className="absolute -top-[1rem] left-[0%] lg:-left-[9rem] h-full xs1:hidden object-contain z-[1]"
            alt=""
          />
          <Image
            src={gradient1}
            className="absolute top-0  left-[0%] xs1:hidden h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sticker2;
