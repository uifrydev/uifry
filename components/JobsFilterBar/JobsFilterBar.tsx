import { JobProps } from "@/Interface/interface";
import { RootState } from "@/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { list } from "../../utils/links";
import Button from "../Button/Button";

const JobsFilterBar = ({
  initialData,
  setProducts,
  filter,
  setFilter,
}: {
  initialData: JobProps[];
  setProducts: React.Dispatch<React.SetStateAction<JobProps[]>>;
  filter: { subCategory: string; type: string };
  setFilter: React.Dispatch<
    React.SetStateAction<{ subCategory: string; type: string }>
  >;
}) => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div
      className={`flex z-[1] lg:flex-col justify-between lg:px-[2rem] flex-wrap gap-[2rem] w-full items-center  lg:pl-[2rem] pl-[23.4rem] pb-[2rem] bg-[#ffffff] sticky lg:relative lg:top-0 ${
        user
          ? "top-[9.01rem] lg:top-[20.6rem]"
          : "top-[15.31rem] lg:top-[26.9rem]"
      }  pt-[2rem]  pr-[4rem]`}
    >
      <div className="flex-0  flex gap-[1.6rem]  lg:hidden">
        {list[5].buttons.map((item, index) => (
          <Button
            onClick={() => {
              setFilter((prev) => ({ ...prev, subCategory: item.title }));
            }}
            key={index}
            classes={`!px-[2rem] !py-[1rem]  rounded-[10rem] border-[1px] ${
              filter.subCategory == item.title
                ? "bg-gradient text-[#ffffff]"
                : "border-border2"
            }`}
          >
            <span>{item.title}</span>
          </Button>
        ))}
      </div>
      <div className="hidden  w-full lg:flex py-[2rem]">
        <select
          onChange={(e) => {}}
          className="w-full h-[5.6rem] text-[#160042] text-[1.7rem] px-[2rem] font-500 border-[1px] border-border2 rounded-[1rem] outline-none "
        >
          {list[5].buttons.map((item, index) => (
            <option key={index}>{item.title}</option>
          ))}
        </select>
      </div>
      <div className="flex gap-[1rem] flex-wrap items-center pt-[.6rem]">
        <div className="flex items-center justify-between sm:w-full gap-[1.5rem]">
          <span className="text-secondaryGray text-[1.6rem] font-400 leading-[2.2rem]">
            Type
          </span>
          <select className="w-[18rem] h-[4.4rem] text-[#160042] bg-primary text-[1.6rem] px-[2rem] py-[1rem] font-500 rounded-full outline-none ">
            <option>All</option>
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
        </div>
        {/* <div className="flex items-center justify-between sm:w-full gap-[1.5rem]">
          <span className="text-secondaryGray text-[1.6rem] font-400 leading-[2.2rem]">
            Filter By
          </span>
          <select className="w-[18rem] h-[4.4rem] text-[#160042] bg-primary text-[1.6rem] px-[2rem] py-[1rem] font-500 rounded-full outline-none ">
            <option>Most Relevant</option>
            <option>Most Recent</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default JobsFilterBar;
