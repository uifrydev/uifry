import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "../components/Card/Card";
import DetailsModal from "../components/DetailsModal/DetailsModal";
import FilterBar from "../components/FilterBar/FilterBar";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
// import '../styles/global.css'
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { updateModal } from "../store/slices/featues";
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";
import KitHeader from "../components/KitHeader/KitHeader";
import { RootState } from "@/store/store";
import { NextPage } from "next";
import { Data } from "@/Interface/interface";
import { useLoadProducts } from "@/customHooks/loadProduct";
import { perProduct } from "@/utils/consts";
import Swipper from "@/components/Swipper/Swipper";
import List from "@/components/List/List";
const Home: NextPage<{
  uiTemplates: Data[];
  uiKits: Data[];
  fonts: Data[];
  styleGuides: Data[];
}> = ({ uiTemplates, uiKits, fonts, styleGuides }) => {
  const openModal = useSelector((state: RootState) => state.features.openModal);
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState(uiTemplates[0]);
  return (
    <>
      {openModal && <DetailsModal setData={setModalData} data={modalData} />}
      <Header title={["Home"]} istitle={false} breadcrums={["Home"]} />
      {/* <KitHeader /> */}
      <Sidebar isDetail={false} />
      {/* <FilterBar /> */}
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full pb-[10rem]">
        <div className="flex flex-col gap-[2rem] py-[4rem] justify-center items-center">
          <h2 className="satoshi max-w-[83rem] text-center text-primaryBlack text-[4.8rem] font-[700] leading-[120%]">
            Discover templates, briefs, jobs, resources crafted for
            <span className="gradient-text"> UI UX designers</span>
          </h2>
          <p className="text-[1.8rem] font-[400] text-center text-secondaryGray">
            UIFry is the ultimate hub for UI UX designers to grow, learn and
            smash client work daily with so much more.
          </p>
        </div>
        <div className="flex flex-col gap-[2rem]">
          <List classes="4xl:grid-cols-3 grid-cols-4  2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1" resources={2} title="UI Templates">
            {uiTemplates.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/ui-templates/details",
                  // href: "/ui-templates/details",
                  query: { template: item?.slug?.current },
                }}
                onClick={(e) => e.preventDefault()}
              >
                <Card
                  key={index}
                  onClick={() => {
                    window.scrollBy(0, 1);
                    document.body.classList.add("overflow-hidden");
                    dispatch(updateModal(true));
                    setModalData(item);
                  }}
                  data={item}
                />
              </Link>
            ))}
          </List>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const uiTemplates = await sanity.fetch(
      `*[_type=='uitemplate'] |[0...3] { 
    title,slug,description,sanityFilter,images[]{
      asset->{url}
    },tags,image,category
  }`
    );
    const uiKits = await sanity.fetch(
      `*[_type=='uxKit'][0...3]{
    title,slug,noOfScreens,subCategory,category,description,sanityFilter,images,tags,features,"fileURL":zipFile.asset->url
}`
    );
    const fonts = await sanity.fetch(
      `*[_type=='font']{
    title,slug,noOfScreens,subCategory,category,description,images,tags,features,"fileURL":zipFile.asset->url
}`
    );
    const styleGuides = await sanity.fetch(
      `*[_type=='styleGuide']{
    title,slug,subCategory,category,description,sanityFilter,tags,"images":image{
      asset->{url}
    },"fileURL":zipFile.asset->url
  }`
    );
    return {
      props: {
        uiTemplates,
        uiKits,
        fonts,
        styleGuides,
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
export default Home;
