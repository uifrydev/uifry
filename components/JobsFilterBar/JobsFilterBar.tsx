import { JobProps } from "@/Interface/interface";
import { RootState } from "@/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { list } from "../../utils/links";
import Button from "../Button/Button";
import { setLoading } from "@/store/slices/auth";
import { perProduct } from "@/utils/consts";
import sanity from "@/sanity";
import { fetchData } from "@/utils/functions";

const JobsFilterBar = ({
  initialData,
  setProducts,
  filter,
  setFilter,
  setLoading,
  setProductIndex,
  isLoading,
}: {
  initialData: JobProps[];
  isLoading: boolean;
  setProducts: React.Dispatch<React.SetStateAction<JobProps[]>>;
  filter: { subCategory: string; type: string };
  setFilter: React.Dispatch<
    React.SetStateAction<{ subCategory: string; type: string }>
  >;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setProductIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div
      className={`flex z-[1] lg:flex-col justify-between lg:px-[2rem] flex-wrap gap-[2rem] w-full items-center  lg:pl-[2rem] pl-[23.4rem] pb-[2rem] bg-[#ffffff] sticky lg:relative lg:!top-0 ${
        user
          ? "top-[9.01rem] lg:top-[20.6rem]"
          : "top-[15.31rem] lg:top-[26.9rem]"
      }  pt-[2rem]  pr-[4rem]`}
    >
      <div className="flex-0  flex gap-[1.6rem]  lg:hidden">
        {list[5].buttons.map((item, index) => (
          <Button
            onClick={async () => {
              if (item.title == filter.subCategory) return;
              setFilter((prev) => ({ ...prev, subCategory: item.title }));
              setProducts([]);
              console.log(filter);
              await fetchData({
                isLoading,
                setLoading,
                setProductIndex,
                setCards: setProducts,
                sanity,
                query: `*[_type=='job' ${
                  item.title !== "All Jobs"
                    ? ` && subCategory=='${item.title}'`
                    : ""
                } ${
                  filter.type !== "All" ? ` && jobType=='${filter.type}'` : ""
                } && applyBefore >= now()]{
                      body,
                      companyName,
                      salaryRange,
                      title,
                      slug,
                      description,
                      images,
                      jobType,
                       primaryIndustry,
                      tags,foundedIn,companySize,
                        subCategory,jobPosted,applyBefore
                }`,
              });
              //     setLoading(true);

              //     let query = `*[_type=='job' ${
              //       item.title !== "All Jobs"
              //         ? ` && subCategory=='${item.title}'`
              //         : ""
              //     } && applyBefore >= now()]{
              //       body,
              //       companyName,
              //       salaryRange,
              //       title,
              //       slug,
              //       description,
              //       images,
              //       jobType,
              //        primaryIndustry,
              //       tags,foundedIn,companySize,
              //         subCategory,jobPosted,applyBefore
              // }`;
              //     let result = await sanity.fetch(query);
              //     setProducts(result);
              //     setProductIndex(result.length);
              //     setLoading(false);
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
      <div className="hidden w-full lg:flex py-[2rem]">
        <select
          onChange={async (e) => {
            setFilter((prev) => ({ ...prev, subCategory: e.target.value }));
            setProducts([]);
            await fetchData({
              isLoading,
              setLoading,
              setProductIndex,
              setCards: setProducts,
              sanity,
              query: `*[_type=='job' ${
                e.target.value !== "All Jobs"
                  ? ` && subCategory=='${e.target.value}'`
                  : ""
              } ${
                filter.type !== "All" ? ` && jobType=='${filter.type}'` : ""
              } && applyBefore >= now()]{
                      body,
                      companyName,
                      salaryRange,
                      title,
                      slug,
                      description,
                      images,
                      jobType,
                       primaryIndustry,
                      tags,foundedIn,companySize,
                        subCategory,jobPosted,applyBefore
                }`,
            });
          }}
          value={filter.type}
          className="w-full h-[5.6rem] cursor-pointer text-[#160042] text-[1.7rem] px-[2rem] font-500 border-[1px] border-border2 rounded-[1rem] outline-none "
        >
          {list[5].buttons.map((item, index) => (
            <option key={index} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-[1rem] flex-wrap items-center pt-[.6rem] lg:mr-auto">
        <div className="flex items-center justify-between sm:w-full gap-[1.5rem]">
          <span className="text-secondaryGray text-[1.6rem] font-400 leading-[2.2rem]">
            Type
          </span>
          <select
            onChange={async (e) => {
              setFilter((prev) => ({ ...prev, type: e.target.value }));
              setProducts([]);
              await fetchData({
                isLoading,
                setLoading,
                setProductIndex,
                setCards: setProducts,
                sanity,
                query: `*[_type=='job' ${
                  filter.subCategory !== "All Jobs"
                    ? ` && subCategory=='${filter.subCategory}'`
                    : ""
                } ${
                  e.target.value !== "All"
                    ? ` && jobType=='${e.target.value}'`
                    : ""
                } && applyBefore >= now()]{
                      body,
                      companyName,
                      salaryRange,
                      title,
                      slug,
                      description,
                      images,
                      jobType,
                       primaryIndustry,
                      tags,foundedIn,companySize,
                        subCategory,jobPosted,applyBefore
                }`,
              });
            }}
            className="w-[18rem] cursor-pointer h-[4.4rem] text-[#160042] bg-primary text-[1.6rem] px-[2rem] py-[1rem] font-500 rounded-full outline-none "
          >
            <option value={"All"}>All</option>
            <option value={"Full Time"}>Full Time</option>
            <option value={"Part Time"}>Part Time</option>
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
