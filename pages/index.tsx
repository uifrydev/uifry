import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "../components/Card/Card";
import DetailsModal from "../components/DetailsModal/DetailsModal";
import FilterBar from "../components/FilterBar/FilterBar";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
// import '../styles/global.css'
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { updateModal, updateModal1 } from "../store/slices/featues";
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";
import KitHeader from "../components/KitHeader/KitHeader";
import { RootState } from "@/store/store";
import { NextPage } from "next";
import { Data, JobProps } from "@/Interface/interface";
import { useLoadProducts } from "@/customHooks/loadProduct";
import { perProduct } from "@/utils/consts";
import Swipper from "@/components/Swipper/Swipper";
import List from "@/components/List/List";
import UiKitCard from "@/components/UiKitCard/UiKitCard";
import DetailsModal1 from "@/components/DetailSmodal1/DetailsModal1";
import FontCard from "@/components/FontCard/FontCard";
import { fetchDataServer } from "@/utils/functions";
import JobCard from "@/components/JobCard/JobCard";
const Home: NextPage<{
  uiTemplates: Data[];
  uiKits: Data[];
  fonts: Data[];
  styleGuides: Data[];
  jobs: JobProps[];
}> = ({ uiTemplates, uiKits, fonts, styleGuides, jobs }) => {
  const {openModal,openModal1} = useSelector((state: RootState) => state.features);
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState(uiTemplates[0]);
  return (
    <>
      {openModal && <DetailsModal setData={setModalData} data={modalData} />}
      {openModal1 && <DetailsModal1 setData={setModalData} data={modalData} />}
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
          <List
            classes="4xl:grid-cols-3 grid-cols-4  2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1"
            resources={2}
            title="UI Templates"
            link='/ui-templates'
          >
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
                    document.body.classList.add("!overflow-y-hidden");
                    dispatch(updateModal(true));
                    setModalData(item);
                  }}
                  data={item}
                />
              </Link>
            ))}
          </List>

          <List
            classes="4xl:grid-cols-2 grid-cols-3  xl:grid-cols-1 "
            resources={2}
            title="UI UX Kits"
            link='/ui-ux-kits'
          >
            {uiKits.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/ui-ux-kits/details",
                  // href: "/ui-templates/details",
                  query: { template: item?.slug?.current },
                }}
                onClick={(e) => e.preventDefault()}
              >
                <UiKitCard
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
          <List
            classes="4xl:grid-cols-2 grid-cols-3  xl:grid-cols-1"
            resources={2}
            title="Fonts"
            link='/fonts'
          >
            {fonts.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/fonts/details",
                  // href: "/ui-templates/details",
                  query: { template: item?.slug?.current },
                }}
                onClick={(e) => e.preventDefault()}
              >
                <FontCard
                  key={index}
                  onClick={() => {
                    window.scrollBy(0, 1);
                    document.body.classList.add("!overflow-y-hidden");
                    dispatch(updateModal(true));
                    setModalData(item);
                  }}
                  data={item}
                />
              </Link>
            ))}
          </List>
          <List
            classes="4xl:grid-cols-3 grid-cols-4  2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1"
            resources={2}
            title="Style Guides"
            link='/styles-guides'
          >
            {styleGuides.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/styles-guides/details",
                  query: { style: item.slug.current },
                }}
                onClick={(e) => e.preventDefault()}
              >
                <Card
                  onClick={() => {
                    window.scrollBy(0, 1);
                    document.body.classList.add("!overflow-y-hidden");
                    dispatch(updateModal1(true));
                    setModalData(item);
                  }}
                  data={item}
                />
              </Link>
            ))}
          </List>

          <List
            classes="4xl:grid-cols-3 grid-cols-4  2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1"
            resources={2}
            title="Jobs"
            link='/jobs'
          >
            {jobs.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/jobs/details",
                  query: { style: item.slug.current },
                }}
                onClick={(e) => e.preventDefault()}
              >
                <JobCard
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
    const uiTemplates = await fetchDataServer({
      query: `*[_type=='uitemplate'] |[0...3] { 
    title,slug,description,sanityFilter,images[]{
      asset->{url}
    },tags,image,category
  }`,
      sanity,
    });
    const uiKits = await fetchDataServer({
      query: `*[_type=='uxKit'][0...2]{
    title,slug,noOfScreens,subCategory,category,description,sanityFilter,images[]{
      asset->{url}
    },tags,features,"fileURL":zipFile.asset->url
}`,
      sanity,
    });
    const fonts = await fetchDataServer({
      query: `*[_type=='font'][0...3]{
    title,slug,noOfScreens,subCategory,category,description,images,tags,features,"fileURL":zipFile.asset->url
}`,
      sanity,
    });
    const styleGuides = await fetchDataServer({
      query: `*[_type=='styleGuide'][0...3]{
    title,slug,subCategory,category,description,sanityFilter,tags,"images":image{
      asset->{url}
    },"fileURL":zipFile.asset->url
  }`,
      sanity,
    });
    const jobs = await fetchDataServer({
      query: `*[_type=='job'][0...3]{
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
      sanity,
    });
    return {
      props: {
        uiTemplates,
        uiKits,
        fonts,
        styleGuides,
        jobs,
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
