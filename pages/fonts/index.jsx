import Link from "next/link";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import FontCard from "../../components/FontCard/FontCard";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sticker from "../../components/Sticker/Sticker";
import sanity from "../../sanity";
import { list } from "../../utils/links";

const Font = ({ posts }) => {
  return (
    <>
      <Header title={["Fonts"]} breadcrums={["Fonts", "All Fonts"]} />
      <Sidebar />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full ">
        <div className=" bg-primary rounded-[2.4rem] flex flex-col gap-[3rem] p-[3rem] items-center py-[6rem] xs:px-[1rem]">
          <div className="flex flex-col gap-[1rem] items-center">
            <h2 className="satoshi text-center text-primaryBlack text-[4.8rem] font-[700] leading-[120%]">
              Fonts crafted for{" "}
              <span className="gradient-text">UI UX projects</span>
            </h2>
            <p className="text-[1.8rem] font-[400] text-center text-secondaryGray">
              UIFry is the ultimate hub for UI UX designers to grow, learn and
              smash client work daily with so much more.
            </p>
          </div>
          {/* <div className="flex gap-[1.6rem] flex-wrap 2xl:hidden">
            {list[3].buttons.map((item, index) => (
              <Button
                onClick={() => setNum(index)}
                key={index}
                classes={`!px-[2rem] !py-[1rem]  rounded-[10rem] border-[1px] ${
                  num == index
                    ? "bg-gradient text-[#ffffff]"
                    : "border-[#E5E9FF]"
                }`}
              >
                <span>{item.title}</span>
              </Button>
            ))}
          </div> */}
          <Sticker />
          <div className=" grid mt-[2rem] 4xl:grid-cols-2 grid-cols-3  gap-[3rem] 2xl2:grid-cols-1">
            
            {posts.map((item, index) => (
              <Link
                href={{
                  pathname: "fonts/details",
                  query: { font: item.slug.current },
                }}
              >
                <FontCard data={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  try {
    const res = await sanity.fetch(
      `*[_type=='font']{
    title,slug,noOfScreens,subCategory,category,description,images,tags,features,"fileURL":zipFile.asset->url
}`
    );
    return {
      props: {
        posts: res || [],
      },
    };
  } catch (e) {
    return {
      props: {
        posts: [],
      },
    };
  }
}
export default Font;
