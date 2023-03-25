import { useRouter } from "next/router";
import React, { useState } from "react";
import Card from "../../components/Card/Card";
import sanity from "../../sanity";
import { updateModal } from "../../store/slices/featues";
import { slugToCapitalize } from "../../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import imageUrlBuilder from "@sanity/image-url";
import { list } from "../../utils/links";
import DetailsModal from "../../components/DetailsModal/DetailsModal";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import FilterBar from "../../components/FilterBar/FilterBar";

const UiTemplatesType = ({ posts }) => {
  const builder = imageUrlBuilder(sanity);
  const urlFor = (source) => {
    return builder.image(source);
  };
  // const [cards, setCards] = useState(posts);
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.features.openModal);

  return (
    <>
      {openModal && <DetailsModal />}
      <Header />
      <Sidebar />
      {/* <FilterBar /> */}
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full ">
        <div className=" grid grid-cols-5 3xlpx]:grid-cols-4 2xl:grid-cols-3 lg1:grid-cols-2 xs1:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] p-[3rem]">
          
        </div>
      </div>
    </>
  );
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
