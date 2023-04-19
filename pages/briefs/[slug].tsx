import { useRouter } from "next/router";
import React, { useState } from "react";
import Card from "../../components/Card/Card";
import sanity from "../../sanity";
import { updateBriefModal, updateModal } from "../../store/slices/featues";
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
import { BriefList, Data, MainCardProps } from "@/Interface/interface";
import Button from "@/components/Button/Button";
import CategoryCard from "@/components/BriefComponents/CategoryCard";
import BriefModal from "@/components/DetailsModal/BreifModal";
import Link from "next/link";
import { perProduct } from "@/utils/consts";

const UiTemplatesType = ({ res, data }: { res: Data[]; data: BriefList }) => {
  // const [cards, setCards] = useState(posts);
  const dispatch = useDispatch();
  const [cards, setCards] = useState<Data[]>(res || []);
  const [isLoading, setLoading] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const { briefModal } = useSelector(
    (state: RootState) => state.features
  );
  const [modalData, setModalData] = useState<Data>({
    category: "",
    fileURL: "",
    slug: { current: "" },
    subCategory: "",
    tags: [],
    title: "",
    description: "",
  });
  const [filter, setFilter] = useState("All");
  return (
    <>
      {briefModal && <BriefModal data={modalData} setData={setModalData} />}
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
        <div className="pl-[3rem]">
          <div className="w-full border-b-[1px] border-border2 pb-[1rem]">
            <h2 className="text-primaryBlack text-[3rem] leading-[150%] satoshi font-700">
              {data.title}
            </h2>
            <span className="text-secondaryGray text-[1.6rem] leading-[3rem]">
              Explore varied practice briefs to create captivating landing pages
              that drive conversions and user engagement.
            </span>
          </div>
          <div className="flex gap-[4.3rem] pt-[2.5rem] pb-[5rem]">
            <div className="flex flex-col flex-1 gap-[2rem]">
              <p className="text-primaryBlack text-[2rem] leading-[150%] satoshi font-700">
                {data?.about?.q}
              </p>
              <div className="flex flex-col gap-[4rem]">
                {data.about?.a.map((item, index) => (
                  <span
                    key={index}
                    className="text-secondaryGray text-[1.6rem] leading-[2.8rem]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-[42rem] h-[29rem] bg-[#d9d9d9] rounded-[1.2rem]"></div>
          </div>

          <div className="p-[3rem] rounded-[2.4rem] bg-primary">
            <div className="flex-1 flex gap-[1.6rem] flex-wrap lg:hidden">
              {data.subCategories.map((item, index) => (
                <Button
                  onClick={() => {
                    setFilter(item);
                  }}
                  key={index}
                  classes={`!px-[2rem] !py-[1rem] bg-[#fff] rounded-[10rem] border-[1px]  ${
                    item == filter
                      ? "bg-gradient text-[#ffffff]"
                      : "!border-border"
                  }`}
                >
                  <span>{item}</span>
                </Button>
              ))}
            </div>
            <div className="hidden  w-full lg:flex py-[2rem]">
              <select
                value={"filter?.subCategory"}
                className="w-full h-[5.6rem] text-[#160042] text-[1.7rem] bg-[#fff] px-[2rem] font-500 border-[1px] border-border2 rounded-[1rem] outline-none "
              >
                {data.subCategories.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid 4xl:grid-cols-3 grid-cols-4  2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1 py-[3rem] gap-[3rem]">
              {cards.map((item, index) => (
                <Link
                  href={{
                    pathname: "/briefs/details",
                    query: {
                      brief: item.slug.current,
                    },
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  <div
                    className=""
                    onClick={() => {
                      window.scrollBy(0, 2);
                      setModalData(item);
                      document.body.classList.add("!overflow-y-hidden");
                      dispatch(updateBriefModal(true));
                    }}
                  >
                    <CategoryCard data={item} />
                  </div>
                </Link>
              ))}
              {/* <CategoryCard />
              <CategoryCard /> */}
            </div>
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
    const res =
      (await fetchDataServer({
        query: `*[_type=='${data?.name}'][0...${perProduct}]{
      title,slug,subCategories,description,images[]{
        asset->{url},
      },"tags":includes,includes,"fileURL":zipFile.asset->url,"total": count(*[_type == "uxKit"])
  }`,
        sanity,
      })) || [];
    if (!data) {
      return {
        notFound: true,
      };
    }
    console.log({ res });
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
