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
const UxUiKits:NextPage<{posts:Data[]}> = ({ posts }) => {
  const openModal = useSelector((state:RootState) => state.features.openModal);
  const [cards, setCards] = useState<Data[]>(posts || []);
  const [filter, setFilter] = useState<FilterParams>({
    subCategory: "All",
    figma: false,
    xd: false,
    sketch: false,
  });

  return (
    <>
      <Header title={["UI Ux", "Kits"]} breadcrums={["UI UX Kits"]} />
      <Sidebar isDetail={false} />
      <FilterBar
        initialData={posts || []}
        setCards={setCards}
        filter={filter}
        setFilter={setFilter}
        buttons={list[1].buttons}
        // classes='min-4xl:!top-[14.51rem] !top-[14.64rem] lg:!top-[26.29rem]'
      />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full ">
        <div className=" grid 4xl:grid-cols-2 grid-cols-3  2xl2:grid-cols-1  bg-primary rounded-[2.4rem] gap-[3rem] p-[3rem] xs:px-[1rem]">
          {cards &&
            cards.map((item, index) => (
              <Link key={index} href={{pathname:"ui-ux-kits/details",query:{kit:item.slug.current}}}>
                <UiKitCard
                  onClick={() => {}}
                  data={item}
                />
              </Link>
            ))}
          {/* <Link href={"ui-ux-kits/details"}>
            <UiKitCard
              onClick={() => {}}
              url={""}
              data={{
                title: "Flaro Landing Page Kit",
                description:
                  "Blurs and gradients will delight you in a modern and vibrant UI library for landing pages.",
              }}
            />
          </Link>
          <Link href={"ui-ux-kits/details"}>
            <UiKitCard
              onClick={() => {}}
              url={""}
              data={{
                title: "Flaro Landing Page Kit",
                description:
                  "Blurs and gradients will delight you in a modern and vibrant UI library for landing pages.",
              }}
            />
          </Link>
          <Link href={"ui-ux-kits/details"}>
            <UiKitCard
              onClick={() => {}}
              url={""}
              data={{
                title: "Flaro Landing Page Kit",
                description:
                  "Blurs and gradients will delight you in a modern and vibrant UI library for landing pages.",
              }}
            />
          </Link> */}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  try {
    const res = await sanity.fetch(
      `*[_type=='uxKit']{
    title,slug,noOfScreens,subCategory,category,description,sanityFilter,images,tags,features,"fileURL":zipFile.asset->url
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
