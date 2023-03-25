import React, { FC, useState } from "react";
import Button from "../Button/Button";
import figma from "../../public/assets/icons/figma.svg";
import xd from "../../public/assets/icons/xd.svg";
import Sketch from "../../public/assets/icons/adobe.svg";
import Image from "next/image";
import { list } from "../../utils/links";
import { applyFilter } from "../../utils/functions";
import Link from "next/link";
import { FilterBar1Props, FilterParams } from "@/Interface/interface";
const FilterBar1: FC<FilterBar1Props> = ({
  filter,
  setFilter,
  setCards,
  initialData,
  buttons = [],
  isFilter,
  parentLink,
  childLink,
}) => {
  const images = [
    { img: figma, title: "figma" },
    { img: xd, title: "xd" },
    { img: Sketch, title: "sketch" },
  ];

  return ( //top-[14.71rem] //!top-[26.29rem]  without and with sticky min-4xl:top-[14.51rem]
    <div className="flex z-[1] lg:flex-col gap-[2rem] w-full items-start lg:pl-[2rem] pl-[23.4rem] pb-[2rem] bg-[#ffffff] sticky md:relative md:top-0  top-[15.24rem] pt-[2rem] lg:top-[26.29rem] pr-[4rem]">
      <div className="flex-1 flex gap-[1.6rem] flex-wrap ">
        {buttons.map((item, index) => (
          <Link href={parentLink + item.link}>
            <Button
              onClick={() => {
                // setFilter((prev) => ({ ...prev, subCategory: item.title }));
                // applyFilter(
                //   { ...filter, subCategory: item.title },
                //   setCards,
                //   initialData
                // );
              }}
              key={index}
              classes={`!px-[2rem] !py-[1rem]  rounded-[10rem] border-[1px] ${
                item.link == childLink
                  ? "bg-gradient text-[#ffffff]"
                  : "border-[#E5E9FF]"
              }`}
            >
              <span>{item?.title}</span>
            </Button>
          </Link>
        ))}
      </div>
      {/* <div className="hidden  w-full lg:flex py-[2rem]">
        <select
          value={filter?.subCategory}
          onChange={(e) => {
            setFilter((prev) => ({ ...prev, subCategory: e.target.value }));
            applyFilter(
              { ...filter, subCategory: e.target.value },
              setCards,
              initialData
            );
          }}
          className="w-full h-[5.6rem] text-[#160042] text-[1.7rem] px-[2rem] font-500 border-[1px] border-[#E5E9FF] rounded-[1rem] outline-none "
        >
          {buttons.map((item, index) => (
            <option
              key={index}
              classes={`!px-[2rem] !py-[1rem]  rounded-[10rem] border-[1px]`}
              value={item?.title}
            >
                {item.title}
            </option>
          ))}
        </select>
      </div> */}
      {isFilter !== false && (
        <div className="flex gap-[1rem] items-center pt-[.6rem]">
          <span className="text-secondaryGray text-[1.6rem] font-400 leading-[2.2rem]">
            Filter By
          </span>
          {images.map((item, index) => (
            <Button
              onClick={() => {
                setFilter((prev:any) => ({
                  ...prev,
                  [item?.title]: !prev[item.title],
                }));
                applyFilter(
                  { ...filter, [item.title]: !filter[item.title] },
                  setCards,
                  initialData
                );
              }}
              key={index}
              classes={`flex w-[3.2rem] h-[3.2rem] items-center ${
                filter[item?.title] == true && "!border-[#E5E9FF]  bg-[#160042]"
              } justify-center !p-0 border-[1px] rounded-full`}
            >
              <Image alt="" src={item.img} />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBar1;
