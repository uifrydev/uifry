import React, { useState } from "react";
import DetailsModal from "../../components/DetailsModal/DetailsModal";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import FilterBar from "../../components/FilterBar/FilterBar";
import sanity from "../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import Card from "../../components/Card/Card";
import { updateModal } from "../../store/slices/featues";
import Link from "next/link";
import { list } from "../../utils/links";
import DetailsModal1 from "../../components/DetailSmodal1/DetailsModal1";
import Sticker from "../../components/Sticker/Sticker";
import Button from "../../components/Button/Button";
import { GetServerSideProps, NextPage } from "next";
import { RootState } from "@/store/store";
import { Data } from "@/Interface/interface";
const StyleGuides: NextPage<{ posts: Data[] }> = ({ posts }) => {
  const [num, setNum] = useState(0);
  const [cards, setCards] = useState(posts);
  const openModal = useSelector((state:RootState) => state.features.openModal);
  const [modalData, setModalData] = useState<Data>(posts[0]);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    subCategory: "All",
    figma: false,
    xd: false,
    sketch: false,
  });

  return (
    <>
      {openModal && <DetailsModal1 data={modalData} />}
      <Header title={["Styles", "Guides"]} breadcrums={["Style Guides"]} />
      <Sidebar isDetail />
      {/* <FilterBar
        isFilter={false}
        initialData={posts}
        setCards={setCards}
        filter={filter}
        setFilter={setFilter}
        buttons={list[0].buttons}
      /> */}
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem]  w-full ">
        <div className="flex flex-col bg-primary rounded-[2.4rem] py-[6rem] p-[3rem] ">
          <div className="flex flex-col gap-[1rem] items-center ">
            <h2 className="satoshi text-center text-primaryBlack text-[4.8rem] font-[700] leading-[120%]">
              Fonts crafted for{" "}
              <span className="gradient-text">UI UX projects</span>
            </h2>
            <p className="text-[1.8rem] font-[400] text-center text-secondaryGray">
              UIFry is the ultimate hub for UI UX designers to grow, learn and
              smash client work daily with so much more.
            </p>
          </div>
          <div className="flex gap-[1.6rem] flex-wrap my-[2rem] 2xl:hidden">
            {list[4].buttons.map((item, index) => (
              <Button
                onClick={() => setNum(index)}
                key={index}
                classes={`!px-[2rem] !py-[1rem] bg-[#fff] rounded-[10rem] border-[1px] ${
                  num == index
                    ? "bg-gradient text-[#ffffff]"
                    : "border-[#E5E9FF]"
                }`}
              >
                <span>{item.title}</span>
              </Button>
            ))}
          </div>
          <Sticker classes=""  />
          <div className=" grid 4xl:grid-cols-3 grid-cols-4 mt-[3rem] 2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1 gap-[3rem]">
            {cards.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/styles-guides/details",
                  // href: "/ui-templates/details",
                  query: { style: item?.slug?.current },
                }}
                onClick={(e) => e.preventDefault()}
              >
                <Card
                  key={index}
                  onClick={() => {
                    window.scrollBy(0, 222);
                    document.body.classList.add("overflow-hidden");
                    dispatch(updateModal(true));
                    setModalData(item);
                  }}
                  data={item}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await sanity.fetch(
      `*[_type=='styleGuide']{
    title,slug,subCategory,category,description,sanityFilter,tags,"images":image{
      asset->{url}
    },"fileURL":zipFile.asset->url
  }`
    );
    console.log({ res });
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
export default StyleGuides;
