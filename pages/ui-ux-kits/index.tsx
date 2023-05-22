import React, { useState } from "react";
import DetailsModal from "../../components/DetailsModal/DetailsModal";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import FilterBar from "../../components/FilterBar/FilterBar";
import UiKitCard from "../../components/UiKitCard/UiKitCard";
import Link from "next/link";
import { list } from "../../utils/links";
import sanity from "../../sanity";
import { NextPage } from "next";
import { Data, FilterParams } from "@/Interface/interface";
import { RootState } from "@/store/store";
import LoadingUIUXCard from "@/components/UiKitCard/LoadingUIUXCard";
import Button from "@/components/Button/Button";
import { fetchData } from "@/utils/functions";
import { loadMore, perProduct } from "@/utils/consts";
import MetaHead from "@/components/MetaHead/MeatHead";
const UxUiKits: NextPage<{ posts: Data[] }> = ({ posts }) => {
  const openModal = useSelector((state: RootState) => state.features.openModal);
  const [cards, setCards] = useState<Data[]>(posts || []);
  const [productIndex, setProductIndex] = useState(posts.length);
  const [isLoadMore, setLoadMore] = useState(posts.length === perProduct);
  const [isLoadmoreLoading, setLoadmoreLoading] = useState(false);
  const [filter, setFilter] = useState({
    subCategory: "All Kits",
    figma: false,
    xd: false,
    sketch: false,
  });
  const [isLoading, setLoading] = useState(false);
  return (
    <>
    <MetaHead
        title="UI UX Kits - UIFry"
        link="ui-ux-kits"
        description="UIFry is the ultimate hub for UI UX designers to grow, learn and smash client work daily with so much more."
      />
      <Header title={["UI UX", "Kits"]} breadcrums={["UI UX Kits"]} />
      <Sidebar isDetail={false} />
      <FilterBar
        initialData={posts || []}
        setCards={setCards}
        filter={filter}
        setFilter={setFilter}
        buttons={list[1].buttons}
        setLoading={setLoading}
        setProductIndex={setProductIndex}
        setLoadMore={setLoadMore}
        // classes='min-4xl:!top-[14.51rem] !top-[14.64rem] lg:!top-[26.29rem]'
      />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[0rem]  w-full ">
        <div className="flex flex-col gap-[2rem] bg-primary rounded-[2.4rem] pb-[3rem]  mb-[3rem]">
          <div className=" grid 4xl:grid-cols-2 grid-cols-3  xl:grid-cols-1  bg-primary rounded-[2.4rem] gap-[3rem] p-[3rem] xs:px-[1rem]">
            {isLoading ? (
              Array.from({ length: 12 }).map((_, index) => (
                <LoadingUIUXCard key={index} />
              ))
            ) : (
              <></>
            )}
            {!isLoading &&
              cards &&
              cards.map((item, index) => (
                <Link
                  key={index}
                  href={{
                    pathname: "ui-ux-kits/details",
                    query: { kit: item.slug.current },
                  }}
                >
                  <UiKitCard onClick={() => {}} data={item} />
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
                query: `*[_type=='uxKit'  ${
                  filter.subCategory !== "All Kits"
                    ? ` && subCategory=='${filter.subCategory}'`
                    : ""
                } ${
                  filter.figma == false ? "" : "&& sanityFilter.Figma==true"
                } ${
                  filter.sketch == false ? "" : "&& sanityFilter.Sketch==true"
                } ${
                  filter.xd == false ? "" : "&& sanityFilter.XD==true"
                }] | order(_updatedAt desc) | [${productIndex}...${
                  productIndex + loadMore
                }]{
                title,slug,subCategory,category,description,sanityFilter,images[]{
                  asset->{url}
                },tags,"fileURL":zipFile.asset->url
              }`,
              });
            }}
          >
            <span className="satoshi text-[1.6rem] font-500 text-[#F7F8FD] rounded-[3.2rem] px-[2.4rem] py-[1.2rem] bg-gradient">
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
      `*[_type=='uxKit'] | order(featured desc, _updatedAt desc)[0...${perProduct}]{
    title,slug,noOfScreens,subCategory,category,description,sanityFilter,images[]{
      asset->{url}
    },tags,features,"fileURL":zipFile.asset->url
}`
    );
    return {
      props: {
        posts: res,
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
export default UxUiKits;
