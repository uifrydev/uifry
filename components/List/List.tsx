import Image from "next/image";
import React, { ReactNode } from "react";
import viewAll from "../../public/assets/icons/viewall.svg";
import Button from "../Button/Button";
const List = ({
  classes,
  children,
  title,
  resources,
}: {
  classes: string;
  children: ReactNode;
  title: string;
  resources: number;
}) => {
  return (
    <div className="flex flex-col gap-[2rem] bg-primary rounded-[2.4rem] py-[3rem] px-[4rem]">
      <div className="flex gap-[3rem] justify-between">
        <div className="flex gap-[2rem] items-center">
          <div className="text-primaryBlack font-500 text-[1.6rem] leading-[150%] py-[1.6rem] px-[2rem] bg-[#fff] rounded-[.6rem] ">
            {title}
          </div>
          <div className="text-secondaryGray text-[1.4rem] font-[500] leading-[2rem]">
            Browse {resources} resources
          </div>
        </div>
        <Button classes="text-primaryBlack font-500 text-[1.6rem] items-center leading-[150%] py-[1.5rem] flex gap-[4rem] px-[2.5rem] bg-[#fff] rounded-[.6rem] ">
          <span>{title}</span>
          <Image alt="" src={viewAll} />
        </Button>
      </div>
      <div className={`grid ${classes}  gap-[3rem] `}>{children}</div>
    </div>
  );
};

export default List;