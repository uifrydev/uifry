import { useRouter } from "next/router";
import React, { useState } from "react";
import Card from "../../components/Card/Card";
import sanity from "../../sanity";
import { updateModal } from "../../store/slices/featues";
import { fetchDataServer, slugToCapitalize } from "../../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import imageUrlBuilder from "@sanity/image-url";
import { breifList, list } from "../../utils/links";
import DetailsModal from "../../components/DetailsModal/DetailsModal";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import FilterBar from "../../components/FilterBar/FilterBar";
import Image from "next/image";
import { RootState } from "@/store/store";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { MainCardProps } from "@/Interface/interface";

const UiTemplatesType = ({ res, data }: { res: any; data: MainCardProps }) => {
  // const [cards, setCards] = useState(posts);
  const dispatch = useDispatch();
  const openModal = useSelector((state: RootState) => state.features.openModal);

  return (
    <>
      {/* {openModal && <DetailsModal />} */}
      <Header
        title={["Briefs"]}
        breadcrums={["Briefs", data.title.split(" ").slice(0, -1).join(" ")]}
      />
      <Sidebar isDetail={false} />
      {/* <FilterBar /> */}
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full ">
        <div className="flex h-[6.5rem] rounded-[2.4rem] bg-primary w-full mb-[4rem]">
          <div className="bg-[white] middle w-[6.8rem] h-[6.8rem] rounded-full relative top-[2.8rem] left-[3.8rem] shadow-cardShadow ">
            <Image
              src={data.img.src}
              className="w-full rounded-full "
              width={80}
              height={80}
              alt=""
            />
          </div>
        </div>
        <div className="pl-[4rem]">
          <div className="w-full border-b-[1px] border-border2 pb-[1rem]">
            <h2 className="text-primaryBlack text-[3rem] leading-[150%] satoshi font-700">
              {data.title}
            </h2>
            <span className="text-secondaryGray text-[1.6rem] leading-[3rem]">
              Explore varied practice briefs to create captivating landing pages
              that drive conversions and user engagement.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const data = breifList.find((item) => item.link == context.params?.slug);
    // console.log(slug);
    const res = await fetchDataServer({
      query: `*[_type=='uxKit'][0...3]{
      title,slug,noOfScreens,subCategory,category,description,sanityFilter,images[]{
        asset->{url}
      },tags,features,"fileURL":zipFile.asset->url,"total": count(*[_type == "uxKit"])
  }`,
      sanity,
    });
    return {
      props: {
        res,
        data,
      },
    };
  } catch (e) {
    console.log(e);
    return { notFound: true, props: {} };
  }
};

// http://localhost:1337/api/posts?populate=*
// export async function getServerSideProps(context) {
//   const parentFilename = context.req.url.split("/")[1];
//   const params = context.params;
//   // const isRoute = list
//   //   .find((item) => item.link.includes(parentFilename))
//   //   .list.find((item) => item.link.includes(params.slug));
//   // if (!isRoute?.title) {
//   //   return {
//   //     notFound: true,
//   //   };
//   // }
//   // const { params = {}, req }={}
//   try {
//     const res = await sanity.fetch(
//       `*[category=="${slugToCapitalize(
//         parentFilename
//       )}" && subCategory=="${slugToCapitalize(
//         params.slug
//       )}" && _type=='product']{
//     title,slug,description,sanityFilter,images,tags,image
//   }`
//     );

//     return {
//       props: {
//         posts: res,
//       },
//     };
//   } catch (e) {
//     return {
//       props: {
//         posts: [],
//       },
//     };
//   }
// }
export default UiTemplatesType;
