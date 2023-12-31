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
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { loadMore } from "@/utils/consts";
import sanity from "@/sanity";
const FilterBar1: FC<FilterBar1Props> = ({
  filter,
  setFilter,
  setCards,
  initialData,
  buttons = [],
  isFilter,
  parentLink,
  childLink,
  onClickFilter,
  setLoading,
  category,
  setProductIndex
}) => {
  const images = [
    { img: figma, title: "figma" },
    { img: xd, title: "xd" },
    { img: Sketch, title: "sketch" },
  ];
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    //top-[14.71rem] //!top-[26.29rem]  without and with sticky min-4xl:top-[14.51rem]
    <div
      className={`flex z-[1] lg:flex-col gap-[2rem] w-full items-start lg:pl-[2rem] pl-[23.4rem] pb-[2rem] pt-[2rem] bg-[#ffffff] sticky md:relative ${
        user
          ? "top-[8.94rem] lg:top-[20.62rem] md:top-0 "
          : "md:top-0 top-[15.24rem] lg:top-[26.29rem]"
      } pr-[4rem]`}
    >
      <div className="flex-1 flex gap-[1.6rem] flex-wrap ">
        {buttons.map((item, index) => (
          <Link key={index} href={parentLink + item.link}>
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
                  : "!border-border"
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
          className="w-full h-[5.6rem] text-[#160042] text-[1.7rem] px-[2rem] font-500 border-[1px] border-border2 rounded-[1rem] outline-none "
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
              onClick={async () => {
                setLoading(true);
                setFilter((prev: any) => ({
                  ...prev,
                  [item?.title]: !prev[item.title],
                }));
                const temp = {
                  ...filter,
                  [item?.title]: !filter[item.title],
                };

                const query = `*[_type=='uitemplate' ${
                  category ? `&& category=='${category}'` : ""
                } ${temp.figma == false ? "" : "&& sanityFilter.Figma==true"} ${
                  temp.sketch == false ? "" : "&& sanityFilter.Sketch==true"
                } ${
                  temp.xd == false ? "" : "&& sanityFilter.XD==true"
                }] | order(_updatedAt desc) | [0...${loadMore}]{
                  title,slug,subCategory,category,description,sanityFilter,images[]{
                    asset->{url}
                  },tags,"fileURL":zipFile.asset->url
                }`;
                
                let result=await sanity.fetch(query)
                setCards(result);
                setProductIndex(result.length)
                setLoading(false);
                // onClickFilter();

                // applyFilter(
                //   { ...filter, [item.title]: !filter[item.title] },
                //   setCards,
                //   initialData
                // );
              }}
              key={index}
              classes={`flex w-[3.2rem] h-[3.2rem] items-center ${
                filter[item?.title] == true && "!border-border2  bg-[#160042]"
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
