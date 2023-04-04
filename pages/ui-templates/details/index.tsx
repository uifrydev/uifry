import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../../components/Header/Header";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import Sidebar from "../../../components/Sidebar/Sidebar";
import sanity from "../../../sanity";
import { updateModal } from "../../../store/slices/featues";
import { slugToCapitalize } from "../../../utils/functions";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { Data } from "@/Interface/interface";

const Detail: NextPage<{ details: Data }> = ({ details }) => {
  const dispatch = useDispatch();
  const [modalData,setModalData]=useState<any>()
  useEffect(() => {
    document.body.style.overflowY = "scroll";
    return () => {
      dispatch(updateModal(false));
    };
  }, []);
  return (
    <>
      <Header
        title={["UI", "Templates"]}
        breadcrums={["UI Templates", "Details"]}
      />
      <Sidebar isDetail />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full ">
        {/* <div className=" grid grid-cols-5 3xlpx]:grid-cols-4 2xl:grid-cols-3 lg1:grid-cols-2 xs1:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] p-[3rem]"> */}
        <ProductDetail showCross data={details} setData={setModalData} />
        {/* </div> */}
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  try {
    const res = await sanity.fetch(
      `*[ _type=='uitemplate' && slug.current=="${context.query.template}"]{
        title,slug,subCategory,category,description,sanityFilter,images[]{
          asset->{url}
        },tags,"fileURL":zipFile.asset->url
          }`
    );
    if (!res.length) {
      return {
        notFound: true,
      };
    }
    // const isRoute = list
    //   .find((item) => item.link.includes("ui-templates"))
    //   .list.find((item) => item.link.includes(params.slug));
    // if (!isRoute?.title) {
    //   return {
    //     notFound: true,
    //   };
    // }
    return {
      props: {
        details: res[0],
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
export default Detail;
