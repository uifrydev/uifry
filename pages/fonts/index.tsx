import { Data } from "@/Interface/interface";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import FontCard from "../../components/FontCard/FontCard";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sticker from "../../components/Sticker/Sticker";
import sanity from "../../sanity";
import { list } from "../../utils/links";
import { fetchData } from "@/utils/functions";
import { loadMore, perProduct } from "@/utils/consts";
import LoadingUIUXCard from "@/components/UiKitCard/LoadingUIUXCard";
import MetaHead from "@/components/MetaHead/MeatHead";

const Font = ({ posts }: { posts: Data[] }) => {
  const [productIndex, setProductIndex] = useState(posts.length);
  const [isLoadmoreLoading, setLoadmoreLoading] = useState(false);
  const [cards, setCards] = useState<Data[]>(posts || []);
  const [isLoadMore, setLoadMore] = useState(posts.length === perProduct);

  return (
    <>
    <MetaHead
        title="Fonts - UIFry"
        link="fonts"
        description="UIFry is the ultimate hub for UI UX designers to grow, learn and smash client work daily with so much more."
      />
      <Header title={["Fonts"]} breadcrums={["Fonts", "All Fonts"]} />
      <Sidebar isDetail={false} />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full ">
        <div className=" bg-primary rounded-[2.4rem] flex flex-col gap-[3rem] p-[3rem] items-center py-[6rem] mb-[3rem] xs:px-[1rem]">
          <div className="flex flex-col gap-[2rem] items-center">
            <h2 className="satoshi text-center text-primaryBlack text-[4.8rem] font-[800] leading-[120%]">
              Fonts crafted for{" "}
              <span className="gradient-text">UI UX projects</span>
            </h2>
            {/* <p className="text-[1.8rem] font-[400] text-center text-secondaryGray">
              UIFry is the ultimate hub for UI UX designers to grow, learn and
              smash client work daily with so much more.
            </p> */}
            <p className="text-[1.8rem] font-[400] max-w-[120rem] text-center text-secondaryGray px-[2rem]">
              Welcome to the Fonts section. This is your destination for
              incredible fonts, specifically tailored for UI/UX projects. All of
              our fonts are designed with clarity and scalability in mind,
              ensuring they function seamlessly even at the smallest
              sizes.Creating fonts is a complex task, and here at UIFry, we
              prioritize quality over quantity. We meticulously review each font
              before adding it to our library, which is why we introduce only
              one new font each week.
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
                    : "border-border2"
                }`}
              >
                <span>{item.title}</span>
              </Button>
            ))}
          </div> */}
          {/* <Sticker classes="" /> */}
          <div className=" grid mt-[2rem] 4xl:grid-cols-2 grid-cols-3  xl:grid-cols-1  gap-[3rem]">
            {cards.map((item, index) => (
              <Link
                href={{
                  pathname: "fonts/details",
                  query: { font: item.slug.current },
                }}
                key={index}
              >
                <FontCard onClick={() => {}} data={item} />
              </Link>
            ))}
            {isLoadmoreLoading &&
              Array.from({ length: 12 }).map((_, index) => (
                <LoadingUIUXCard key={index} />
              ))}
          </div>
          <Button
            onClick={async () => {
              if (!isLoadMore) return;
              await fetchData({
                setLoadMore,
                isLoading: isLoadmoreLoading,
                setLoading: setLoadmoreLoading,
                setProductIndex,
                setCards,
                sanity,
                query: `*[_type=='font'] | order(_updatedAt desc) | [${productIndex}...${
                  productIndex + loadMore
                }]{
                title,slug,subCategory,category,description,sanityFilter,images[]{
                  asset->{url}
                },tags,"fileURL":zipFile.asset->url
              }`,
              });
            }}
            classes="bg-gradient rounded-[3.2rem]"
          >
            <span className="satoshi text-[1.6rem] font-500 text-[#F7F8FD] px-[2.4rem] py-[1.2rem] ">
              {isLoadmoreLoading
                ? "Loading..."
                : !isLoadMore
                ? "All Loaded - We add more resources daily"
                : "Load More"}
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  try {
    const res = await sanity.fetch(
      `*[_type=='font'][0...${perProduct}]{
    title,slug,noOfScreens,subCategory,category,description,images[]{
      asset->{url}
    },tags,features,"fileURL":zipFile.asset->url
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
