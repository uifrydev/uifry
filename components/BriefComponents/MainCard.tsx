import { MainCardProps } from "@/Interface/interface";
import Image from "next/image";
import React from "react";
import check from "../../public/assets/icons/check_green.svg";
import Button from "../Button/Button";
const MainCard = ({ title, desc, img, includes }: MainCardProps) => {
  return (
    <div className="bg-[#fff] p-[3rem] flex flex-col gap-[1.6rem] rounded-[1.2rem]">
      <Image alt={img.alt} src={img.src} />
      <span className="satoshi font-700 text-[1.7rem] leading-[150%] text-primaryBlack">
        {title}
      </span>
      <span className="text-[1.4rem] font-400 leading-[150%] text-secondaryGray w-full pt-[1rem] border-t-[1px] border-[#E5E9FF]">
        {desc}
      </span>
      <span className="satoshi text-[1.4rem] font-400 leading-[150%] text-primaryBlack">Includes briefs for:</span>
      <ul className="flex flex-col gap-[1rem]">
        {includes.map((item, index) => {
          return (
            <li className="flex items-center gap-[.8rem] leading-[150%] text-secondaryGray text-[1.4rem]" key={index}>
              <Image alt={`check_list${index}`} src={check} />
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <Button classes="rounded-full bg-primaryBlack py-[.8rem] px-[2.5rem] ">
        <span className="text-[1.4rem] leading-[2.4rem] text-[#fff] font-700">
          Discover & Start
        </span>
      </Button>
    </div>
  );
};

export default MainCard;
