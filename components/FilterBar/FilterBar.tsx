import React, { FC, useState } from "react";
import Button from "../Button/Button";
import figma from "../../public/assets/icons/figma.svg";
import xd from "../../public/assets/icons/xd.svg";
import Sketch from "../../public/assets/icons/adobe.svg";
import Image from "next/image";
import { list } from "../../utils/links";
import { applyFilter } from "../../utils/functions";
import { FilterBarProps } from "@/Interface/interface";

const FilterBar: FC<FilterBarProps> = ({
  filter,
  setFilter,
  setCards,
  initialData,
  buttons = [],
  isFilter,
}) => {
  const images: { img: string, title: string }[] = [
    { img: figma, title: "figma" },
    { img: xd, title: "xd" },
    { img: Sketch, title: "sketch" },
  ];

  return (
    <div
      className={`flex z-[1] lg:flex-col w-full items-start lg:pl-[2rem] pl-[23.4rem] pb-[2rem] bg-[#ffffff] sticky top-[15.31rem] pt-[2rem] lg:top-[26.9rem] pr-[4rem] `}
    >
      <div className="flex-1 flex gap-[1.6rem] flex-wrap lg:hidden">
        {buttons.map((item, index) => (
          <Button
            onClick={() => {
              setFilter((prev) => ({ ...prev, subCategory: item.title }));
              applyFilter(
                { ...filter, subCategory: item.title },
                setCards,
                initialData
              );
            }}
            key={index}
            classes={`!px-[2rem] !py-[1rem]  rounded-[10rem] border-[1px] ${item.title.includes(filter?.subCategory)
                ? "bg-gradient text-[#ffffff]"
                : "border-[#E5E9FF]"
              }`}
          >
            <span>{item?.title}</span>
          </Button>
        ))}
      </div>
      <div className="hidden  w-full lg:flex py-[2rem]">
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
          {list[0].buttons.map((item, index) => (
            <option
              key={index}
              value={item?.title}
            >
              {item.title}
            </option>
          ))}
        </select>
      </div>
      {isFilter !== false && (
        <div className="flex gap-[1rem] items-center pt-[.6rem]">
          <span className="text-secondaryGray text-[1.6rem] font-400 leading-[2.2rem]">
            Filter By
          </span>
          {/* {images.map((item, index) => (
            <Button
              onClick={() => {
                setFilter((prev) => ({
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
              classes={`flex w-[3.2rem] h-[3.2rem] items-center ${filter[item?.title] == true && "!border-[#E5E9FF]  bg-[#160042]"
                } justify-center !p-0 border-[1px] rounded-full`}
            >
              <Image alt="" src={item.img} />
            </Button>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
