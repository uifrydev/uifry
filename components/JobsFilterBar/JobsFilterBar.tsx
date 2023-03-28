import { JobProps } from "@/Interface/interface";
import React, { useState } from "react";
import { list } from "../../utils/links";
import Button from "../Button/Button";

const JobsFilterBar = ({
  initialData,
  setProducts,
}: {
  initialData: JobProps[];
  setProducts: React.Dispatch<React.SetStateAction<JobProps[]>>;
}) => {
  const [num, setNum] = useState(0);
  return (
    <div className="flex z-[1] lg:flex-col justify-between lg:px-[2rem] flex-wrap gap-[2rem] w-full items-center  lg:pl-[2rem] pl-[23.4rem] pb-[2rem] bg-[#ffffff] sticky top-[8.41rem] pt-[2rem] lg:top-[20rem] pr-[4rem]">
      <div className="flex-0  flex gap-[1.6rem]  lg:hidden">
        {list[5].buttons.map((item, index) => (
          <Button
            onClick={() => {
              setNum(index);
            }}
            key={index}
            classes={`!px-[2rem] !py-[1rem]  rounded-[10rem] border-[1px] ${
              num == index ? "bg-gradient text-[#ffffff]" : "border-[#E5E9FF]"
            }`}
          >
            <span>{item.title}</span>
          </Button>
        ))}
      </div>
      <div className="hidden  w-full lg:flex py-[2rem]">
        <select className="w-full h-[5.6rem] text-[#160042] text-[1.7rem] px-[2rem] font-500 border-[1px] border-[#E5E9FF] rounded-[1rem] outline-none ">
          {list[5].buttons.map((item, index) => (
            <option onClick={() => setNum(index)} key={index}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-[1rem] flex-wrap items-center pt-[.6rem]">
        <div className="flex items-center justify-between sm:w-full gap-[1.5rem]">
          <span className="text-secondaryGray text-[1.6rem] font-400 leading-[2.2rem]">
            Type
          </span>
          <select className="w-[18rem] h-[4.4rem] text-[#160042] bg-primary text-[1.6rem] px-[2rem] py-[1rem] font-500 rounded-full outline-none ">
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
        </div>
        <div className="flex items-center justify-between sm:w-full gap-[1.5rem]">
          <span className="text-secondaryGray text-[1.6rem] font-400 leading-[2.2rem]">
            Filter By
          </span>
          <select className="w-[18rem] h-[4.4rem] text-[#160042] bg-primary text-[1.6rem] px-[2rem] py-[1rem] font-500 rounded-full outline-none ">
            <option>Most Relevant</option>
            <option>Most Recent</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default JobsFilterBar;
