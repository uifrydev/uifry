import React, { useEffect, useState } from "react";
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
import FilterBar1 from "../../components/FilterBar/FilterBar1";
import Button from "../../components/Button/Button";
import { fetchData, fetchDataServer } from "../../utils/functions";
import DetailsModal1 from "../../components/DetailsModal/DetailModal1";
import { loadMore, perProduct } from "../../utils/consts";
import { RootState } from "@/store/store";
import { GetServerSideProps, NextPage } from "next";
import { Data } from "@/Interface/interface";
import LoadingCard from "@/components/Card/Loadingard";
import MetaHead from "@/components/MetaHead/MeatHead";
const UiTemplates: NextPage<{ posts: Data[] }> = ({ posts }) => {
  const builder = imageUrlBuilder(sanity);
  const [cards, setCards] = useState(posts);
  const openModal = useSelector((state: RootState) => state.features.openModal);
  const [modalData, setModalData] = useState<Data>(posts[0]);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [isLoadmoreLoading, setLoadmoreLoading] = useState(false);
  const [isLoadMore, setLoadMore] = useState(posts.length === perProduct);
  const [productIndex, setProductIndex] = useState(posts.length);
  const [filter, setFilter] = useState({
    subCategory: "All",
    figma: false,
    xd: false,
    sketch: false,
  });

  return (
    <>
      <MetaHead
        title="UI Templates - UIFry"
        link="ui-templates"
        description="UIFry is the ultimate hub for UI UX designers to grow, learn and smash client work daily with so much more."
      />
      {openModal && <DetailsModal data={modalData} setData={setModalData} />}
      <Header
        title={["UI", "Templates"]}
        breadcrums={["UI Templates", "All Templates"]}
      />
      <Sidebar isDetail={false} />
      <FilterBar1
        initialData={posts}
        setCards={setCards}
        filter={filter}
        setFilter={setFilter}
        buttons={list[0].list}
        parentLink={"/ui-templates"}
        childLink={"/"}
        setLoading={setLoading}
        category=""
        setProductIndex={setProductIndex}
        setLoadMore={setLoadMore}
      />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[0rem] w-full ">
        <div className="flex flex-col gap-[2rem] bg-primary rounded-[2.4rem] pb-[3rem]  mb-[3rem]">
          <div className=" grid 4xl:grid-cols-3 grid-cols-4  2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1 gap-[3rem] p-[3rem]">
            {isLoading &&
              Array.from({ length: 12 }).map((_, index) => (
                <LoadingCard key={index} />
              ))}
            {!isLoading &&
              cards.map((item, index) => (
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
                      window.scrollBy(0, 2);
                      document.body.classList.add("!overflow-y-hidden");
                      dispatch(updateModal(true));
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
                query: `*[_type=='uitemplate' ${
                  filter.figma == false ? "" : "&& sanityFilter.Figma==true"
                } ${
                  filter.sketch == false ? "" : "&& sanityFilter.Sketch==true"
                } ${
                  filter.xd == false ? "" : "&& sanityFilter.XD==true"
                }] | order(_updatedAt desc) | [${productIndex}...${
                  productIndex + loadMore
                }]{
                title,slug,subCategory,category,description,sanityFilter,images[]{
                  asset->{url}
                },tags,"fileURL":zipFile.asset->url
              }`,
              });
            }}
          >
            <span className="satoshi text-[1.6rem] font-500 text-[#F7F8FD] rounded-[3.2rem] px-[2.4rem] py-[1.2rem] bg-gradient">
              {isLoadmoreLoading
                ? "Loading..."
                : !isLoadMore
                ? "All Data Loaded"
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
    const res = await fetchDataServer({
      sanity,
      query: `*[_type=='uitemplate' ] | order(featured desc, _updatedAt desc)[0...${perProduct}]{
      title,slug,subCategory,category,description,sanityFilter,images[]{
        asset->{url}
      },tags,image,"fileURL":zipFile.asset->url
    }`,
    });

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
export default UiTemplates;
