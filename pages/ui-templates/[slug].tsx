import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import sanity from "../../sanity";
import { updateModal } from "../../store/slices/featues";
import {
  fetchData,
  fetchDataServer,
  slugToCapitalize,
  titleWithSlug,
} from "../../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import imageUrlBuilder from "@sanity/image-url";
import { list } from "../../utils/links";
import DetailsModal from "../../components/DetailsModal/DetailsModal";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import FilterBar from "../../components/FilterBar/FilterBar";
import Link from "next/link";
import FilterBar1 from "../../components/FilterBar/FilterBar1";
import Button from "../../components/Button/Button";
import DetailsModal1 from "../../components/DetailsModal/DetailModal1";
import { loadMore, perProduct } from "../../utils/consts";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { Data } from "@/Interface/interface";
import { RootState } from "@/store/store";
import LoadingCard from "@/components/Card/Loadingard";
import MetaHead from "@/components/MetaHead/MeatHead";

const UiTemplatesType: NextPage<{ posts: Data[] }> = ({ posts }) => {
  const router = useRouter();
  const pid = router.query;
  const builder = imageUrlBuilder(sanity);
  const [cards, setCards] = useState(posts || []);
  const [isLoading, setLoading] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const dispatch = useDispatch();
  const [isLoadmoreLoading, setLoadmoreLoading] = useState(false);
  const [isLoadMore, setLoadMore] = useState(posts.length === perProduct);
  const [modalData, setModalData] = useState<Data>(posts[0]);
  const openModal = useSelector((state: RootState) => state.features.openModal);
  const title = titleWithSlug(String(pid?.slug) || "");
  const [filter, setFilter] = useState({
    subCategory: "All",
    figma: false,
    xd: false,
    sketch: false,
  });
  useEffect(() => {
    setProductIndex(posts.length);
    setCards(posts);
    dispatch(updateModal(false));
  }, [router.asPath]);
  return (
    <>
      <MetaHead
        title={`${String(title)} - UIFry`}
        link={`uitemplates/${pid.slug}`}
        description="UIFry is the ultimate hub for UI UX designers to grow, learn and smash client work daily with so much more."
      />
      {openModal && <DetailsModal data={modalData} setData={setModalData} />}
      <Header
        title={[...String(title)?.split(" ")]}
        breadcrums={["UI Templates", String(title)]}
      />
      <Sidebar isDetail={false} />
      <FilterBar1
        initialData={posts}
        setCards={setCards}
        filter={filter}
        setFilter={setFilter}
        buttons={list[0].list}
        parentLink={"/ui-templates"}
        childLink={"/" + pid.slug}
        setLoading={setLoading}
        category={slugToCapitalize("" + pid?.slug)}
        setProductIndex={setProductIndex}
        setLoadMore={setLoadMore}
      />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[0rem] w-full ">
        <div className="flex flex-col gap-[2rem] bg-primary rounded-[2.4rem] pb-[3rem] mb-[3rem]">
          <div className=" grid 4xl:grid-cols-3 grid-cols-4  2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1  gap-[3rem] p-[3rem]">
            {isLoading &&
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <LoadingCard key={item} />
              ))}
            {!isLoading &&
              cards &&
              cards.map((item, index) => (
                <Link
                  href={{
                    pathname: "/ui-templates/details",
                    query: { template: item.slug.current },
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
                    // url={urlFor(item.images[0]).url()}
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
                query: `*[category=="${slugToCapitalize(
                  String(pid.slug)
                )}"  && _type=='uitemplate'] | [${productIndex}...${
                  productIndex + loadMore
                }]{
                title,slug,subCategory,category,description,sanityFilter,images[]{
                  asset->{url}
                },tags,"fileURL":zipFile.asset->url
              }`,
              });
            }}
            classes="bg-gradient rounded-[3.2rem]"

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
// http://localhost:1337/api/posts?populate=*
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = context.params;
  try {
    const res = await fetchDataServer({
      query: `*[category=="${slugToCapitalize(
        String(params?.slug)
      )}"  && _type=='uitemplate'] | order(featured desc, _updatedAt desc)[0...${perProduct}]{
        title,slug,subCategory,category,description,sanityFilter,images[]{
          asset->{url}
        },tags,"fileURL":zipFile.asset->url
          }`,
      sanity,
    });
    // const isRoute = list
    //   .find((item) => item.link.includes("ui-templates"))
    //   .list.find((item) => item.link.includes(params.slug));
    // if (!isRoute?.title) {
    //   return {
    //     notFound: true,
    //   };
    // }
    if (!res.length) {
      return {
        notFound: true,
      };
    }
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
export default UiTemplatesType;
