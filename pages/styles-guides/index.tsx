import React, { useState } from "react";
import DetailsModal from "../../components/DetailsModal/DetailsModal";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import FilterBar from "../../components/FilterBar/FilterBar";
import sanity from "../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import Card from "../../components/Card/Card";
import { updateModal, updateModal1 } from "../../store/slices/featues";
import Link from "next/link";
import { list } from "../../utils/links";
import DetailsModal1 from "../../components/DetailSmodal1/DetailsModal1";
import Sticker from "../../components/Sticker/Sticker";
import Button from "../../components/Button/Button";
import { GetServerSideProps, NextPage } from "next";
import { RootState } from "@/store/store";
import { Data } from "@/Interface/interface";
import { applyFilter, fetchData } from "@/utils/functions";
import { loadMore, perProduct } from "@/utils/consts";
import LoadingCard from "@/components/Card/Loadingard";
import MetaHead from "@/components/MetaHead/MeatHead";
const StyleGuides: NextPage<{ posts: Data[] }> = ({ posts }) => {
  const [num, setNum] = useState(0);
  const [cards, setCards] = useState(posts);
  const openModal1 = useSelector(
    (state: RootState) => state.features.openModal1
  );
  const [modalData, setModalData] = useState<Data>(posts[0]);
  const [isLoading, setLoading] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const [isLoadmoreLoading, setLoadmoreLoading] = useState(false);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("All");
  const [isLoadMore, setLoadMore] = useState(posts.length === perProduct);

  return (
    <>
      <MetaHead
        title={`Styles Guides - UIFry`}
        link={`styles-guides`}
        description="UIFry is the ultimate hub for UI UX designers to grow, learn and smash client work daily with so much more."
      />
      {openModal1 && <DetailsModal1 data={modalData} setData={setModalData} />}
      <Header title={["Styles", "Guides"]} breadcrums={["Style Guides"]} />
      <Sidebar isDetail={false} />
      {/* <FilterBar
        isFilter={false}
        initialData={posts}
        setCards={setCards}
        filter={filter}
        setFilter={setFilter}
        buttons={list[0].buttons}
      /> */}
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem]  w-full ">
        <div className="flex flex-col bg-primary rounded-[2.4rem] mb-[3rem] py-[6rem] p-[3rem] ">
          <div className="flex flex-col gap-[1rem] items-center ">
            <h2 className="satoshi text-center text-primaryBlack text-[4.8rem] font-[700] leading-[120%]">
              Style Guides for{" "}
              <span className="gradient-text">UI UX projects</span>
            </h2>
            <p className="text-[1.8rem] font-[400] text-center text-secondaryGray">
              We craft style guides to help designers start a project with
              predefined colors, type and examples!
            </p>
          </div>
          <div className="flex gap-[1.6rem] flex-wrap justify-center my-[2rem] ">
            {list[4].buttons.map((item, index) => (
              <Button
                onClick={async () => {
                  setFilter(item.title);
                  setCards([]);
                  await fetchData({
                    setLoadMore,
                    isLoading,
                    setLoading,
                    setProductIndex,
                    setCards,
                    sanity,
                    query: `*[_type=='styleGuide' ${
                      item.title != "All"
                        ? `&& subCategory=='${item.title}'`
                        : ""
                    }][0...${perProduct}]{
                      title,slug,subCategory,category,description,sanityFilter,tags,"images":image{
                        asset->{url}
                      },"fileURL":zipFile.asset->url
                    }`,
                  });
                }}
                key={index}
                classes={`!px-[2rem] !py-[1rem] bg-[#fff] rounded-[10rem] border-[1px] ${
                  filter == item.title
                    ? "bg-gradient text-[#ffffff]"
                    : "border-border2"
                }`}
              >
                <span>{item.title}</span>
              </Button>
            ))}
          </div>
          {/* <Sticker classes="max-w-[50rem]" /> */}
          <div className=" grid 4xl:grid-cols-3 grid-cols-3 mt-[3rem] 2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1 gap-[3rem]">
            {isLoading &&
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <LoadingCard key={item} />
              ))}
            {!isLoading &&
              cards.map((item, index) => (
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
                      window.scrollBy(0, 2);
                      document.body.classList.add("!overflow-y-hidden");
                      dispatch(updateModal1(true));
                      setModalData(item);
                    }}
                    data={item}
                  />
                </Link>
              ))}
            {isLoadmoreLoading &&
              Array.from({ length: 12 }).map((_, index) => (
                <LoadingCard key={index} />
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
                query: `*[_type=='styleGuide' ${
                  filter != "All" ? `&& subCategory=='${filter}'` : ""
                }][${productIndex}...${productIndex + perProduct}]{
                  title,slug,subCategory,category,description,sanityFilter,tags,"images":image{
                    asset->{url}
                  },"fileURL":zipFile.asset->url
                }`,
              });
            }}
            classes="bg-gradient mt-[2rem] rounded-[3.2rem]"
          >
            <span className="satoshi text-[1.6rem] font-500 text-[#F7F8FD] px-[2.4rem] py-[1.2rem]">
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
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await sanity.fetch(
      `*[_type=='styleGuide'][0...${perProduct}]{
    title,slug,subCategory,category,description,sanityFilter,tags,"images":image{
      asset->{url}
    },"fileURL":zipFile.asset->url
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
};
export default StyleGuides;
