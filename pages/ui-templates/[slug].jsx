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

const UiTemplatesType = ({ posts }) => {
  const router = useRouter();
  const pid = router.query;
  const builder = imageUrlBuilder(sanity);
  const urlFor = (source) => {
    return builder.image(source);
  };
  const [cards, setCards] = useState(posts || []);
  const [isLoading, setLoading] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState(null);
  const openModal = useSelector((state) => state.features.openModal);
  const title = titleWithSlug(pid.slug);
  const [filter, setFilter] = useState({
    subCategory: "All",
    figma: false,
    xd: false,
    sketch: false,
  });
  useEffect(() => {
    setProductIndex(posts.length);
    setCards(posts);
  }, [router.asPath]);
  
  return (
    <>
      {openModal && <DetailsModal data={modalData} />}
      <Header
        title={[title?.split(" ")[0], title?.split(" ")[1]]}
        breadcrums={["UI Templates", title]}
      />
      <Sidebar />
      <FilterBar1
        initialData={posts}
        setCards={setCards}
        filter={filter}
        setFilter={setFilter}
        buttons={list[0].list}
        parentLink={"/ui-templates"}
        childLink={"/" + pid.slug}
      />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[0rem] w-full ">
        <div className="flex flex-col gap-[2rem] bg-primary rounded-[2.4rem] pb-[3rem]">
          <div className=" grid 4xl:grid-cols-3 grid-cols-4  2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1  gap-[3rem] p-[3rem]">
            {cards &&
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
                      window.scrollBy(0, 1);
                      document.body.classList.add("overflow-hidden");
                      dispatch(updateModal(true));
                      setModalData(item);
                    }}
                    // url={urlFor(item.images[0]).url()}
                    data={item}
                  />
                </Link>
              ))}
          </div>

          <Button
            onClick={async () =>
              await fetchData({
                isLoading,
                setLoading,
                setProductIndex,
                productIndex,
                setCards,
                sanity,
                query: `*[category=="${slugToCapitalize(
                  pid.slug
                )}"  && _type=='uitemplate'] | [${productIndex}...${
                  productIndex + loadMore
                }]{
                title,slug,subCategory,category,description,sanityFilter,images[]{
                  asset->{url}
                },tags,"fileURL":zipFile.asset->url
              }`,
              })
            }
          >
            <span className="satoshi text-[1.6rem] font-500 text-[#F7F8FD] rounded-[3.2rem] px-[2.4rem] py-[1.2rem] bg-gradient">
              {isLoading ? "Loading..." : "Load More"}
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};
// http://localhost:1337/api/posts?populate=*
export async function getServerSideProps(context) {
  const parentFilename = context.req.url.split("/")[1];
  const params = context.params;
  try {
    const res = await fetchDataServer({
      query: `*[category=="${slugToCapitalize(
        params.slug
      )}"  && _type=='uitemplate'] | [0...${perProduct}]{
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
export default UiTemplatesType;
