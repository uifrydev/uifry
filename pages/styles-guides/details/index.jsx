import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../../../components/Header/Header";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import ProductDetail1 from "../../../components/ProductDetail1/ProductDetail1";
import Sidebar from "../../../components/Sidebar/Sidebar";
import sanity from "../../../sanity";
import { updateModal } from "../../../store/slices/featues";
import { slugToCapitalize } from "../../../utils/functions";

const Detail = ({ details }) => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    document.body.style.overflowY = "scroll";
    return () => dispatch(updateModal(false));
  }, []);
  return (
    <>
      <Header
        title={["UI", "Templates"]}
        breadcrums={["UI Templates", "Details"]}
      />
      <Sidebar />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full ">
        {/* <div className=" grid grid-cols-5 3xlpx]:grid-cols-4 2xl:grid-cols-3 lg1:grid-cols-2 xs1:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] p-[3rem]"> */}
        <ProductDetail1 data={details} />
        {/* </div> */}
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  const parentFilename = context.req.url.split("/")[1];
  const params = context.params;
  try {
    const res = await sanity.fetch(
      `*[ _type=='styleGuide' && slug.current=="${context.query.style}" ]{
        title,slug,subCategory,category,description,sanityFilter,tags,image,"images":image{
          asset->{url}
        },"fileURL":zipFile.asset->url
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
