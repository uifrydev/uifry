import React, { FC, useState } from "react";
import Button from "../Button/Button";
import figma from "../../public/assets/icons/figma.svg";
import xd from "../../public/assets/icons/xd.svg";
import Sketch from "../../public/assets/icons/adobe.svg";
import Image from "next/image";
import { list } from "../../utils/links";
import { applyFilter } from "../../utils/functions";
import { FilterBarProps, FilterParams } from "@/Interface/interface";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { loadMore, perProduct } from "@/utils/consts";
import sanity from "@/sanity";

const FilterBar: FC<FilterBarProps> = ({
  filter,
  setFilter,
  setCards,
  initialData,
  buttons = [],
  isFilter,
  setLoading,
  setProductIndex,
}) => {
  const images: { img: string; title: string }[] = [
    { img: figma, title: "figma" },
    { img: xd, title: "xd" },
    { img: Sketch, title: "sketch" },
  ];
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div
      className={`flex z-[1] lg:flex-col w-full items-start lg:pl-[2rem] pl-[23.4rem] pb-[2rem] bg-[#ffffff] sticky lg:relative lg:!top-0 pt-[2rem] ${
        user
          ? "top-[9.01rem] lg:top-[20.6rem]"
          : "top-[15.31rem] lg:top-[26.9rem]"
      } pr-[4rem] `}
    >
      <div className="flex-1 flex gap-[1.6rem] flex-wrap lg:hidden">
        {buttons.map((item, index) => (
          <Button
            onClick={async () => {
              setFilter((prev: FilterParams) => ({
                ...prev,
                subCategory: item.title,
              }));
              setLoading(true);
              let query = `*[_type=='uxKit' ${
                item.title !== "All Kits"
                  ? ` && subCategory=='${item.title}'`
                  : ""
              } ${filter.figma == false ? "" : "&& sanityFilter.Figma==true"} ${
                filter.sketch == false ? "" : "&& sanityFilter.Sketch==true"
              } ${
                filter.xd == false ? "" : "&& sanityFilter.XD==true"
              }] | order(featured desc, _updatedAt desc)[0...${perProduct}]{
                title,slug,noOfScreens,subCategory,category,description,sanityFilter,images[]{
                  asset->{url}
                },tags,features,"fileURL":zipFile.asset->url
            }`;
              let result = await sanity.fetch(query);
              setCards(result);
              setProductIndex(result.length);
              setLoading(false);
              // applyFilter(
              //   { ...filter, subCategory: item.title },
              //   setCards,
              //   initialData
              // );
            }}
            key={index}
            classes={`!px-[2rem] !py-[1rem]  rounded-[10rem] border-[1px]  ${
              item.title.includes(filter?.subCategory)
                ? "bg-gradient text-[#ffffff]"
                : "!border-border"
            }`}
          >
            <span>{item?.title}</span>
          </Button>
        ))}
      </div>
      <div className="hidden  w-full lg:flex py-[2rem]">
        <select
          value={filter?.subCategory}
          onChange={async (e) => {
            setFilter((prev: FilterParams) => ({
              ...prev,
              subCategory: e.target.value,
            }));
            setLoading(true);
            let query = `*[_type=='uxKit' ${
              e.target.value !== "All Kits"
                ? ` && subCategory=='${e.target.value}'`
                : ""
            } ${filter.figma == false ? "" : "&& sanityFilter.Figma==true"} ${
              filter.sketch == false ? "" : "&& sanityFilter.Sketch==true"
            } ${
              filter.xd == false ? "" : "&& sanityFilter.XD==true"
            }] | order(featured desc, _updatedAt desc)[0...${perProduct}]{
              title,slug,noOfScreens,subCategory,category,description,sanityFilter,images[]{
                asset->{url}
              },tags,features,"fileURL":zipFile.asset->url
          }`;
            let result = await sanity.fetch(query);
            setCards(result);
            setProductIndex(result.length);
            setLoading(false);
          }}
          className="w-full h-[5.6rem] text-[#160042] text-[1.7rem] px-[2rem] font-500 border-[1px] border-border2 rounded-[1rem] outline-none "
        >
          {buttons.map((item, index) => (
            <option key={index} value={item?.title}>
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

                const query = `*[_type=='uxKit'  ${
                  filter.subCategory !== "All Kits"
                    ? ` && subCategory=='${filter.subCategory}'`
                    : ""
                } ${temp.figma == false ? "" : "&& sanityFilter.Figma==true"} ${
                  temp.sketch == false ? "" : "&& sanityFilter.Sketch==true"
                } ${
                  temp.xd == false ? "" : "&& sanityFilter.XD==true"
                }] | order(featured desc, _updatedAt desc)[0...${perProduct}]{
                  title,slug,subCategory,category,description,sanityFilter,images[]{
                    asset->{url}
                  },tags,"fileURL":zipFile.asset->url
                }`;
                console.log({ query });
                let result = await sanity.fetch(query);
                setCards(result);
                setProductIndex(result.length);
                setLoading(false);
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

export default FilterBar;
