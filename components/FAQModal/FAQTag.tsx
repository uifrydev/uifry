import Image from "next/image";
import React, { ReactNode } from "react";

const FAQTag = ({
  title,
  description,
  classes,
  imageClass,
}: {
  title: string;
  description: ReactNode;
  classes?: string;
  imageClass?: string;
}) => (
  <div
    className={`w-full sm:flex-col rounded-[1.6rem] pb-[2.2rem] pt-[1.7rem] ${classes} pl-[3rem] pr-[3rem] bg-[#fff] flex gap-[2.5rem] items-center border-[1px] border-[#E5E9FF]`}
  >
    <div className="flex flex-col gap-[.5rem]">
      <span className="satoshi text-primaryBlack sm:text-center text-[1.6rem] font-700 leading-[2.6rem]">
        {title}
      </span>
      
        {description}
      
    </div>
  </div>
);

export default FAQTag;
