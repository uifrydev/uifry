import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "../components/Card/Card";
import DetailsModal from "../components/DetailsModal/DetailsModal";
import FilterBar from "../components/FilterBar/FilterBar";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
// import '../styles/global.css'
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { updateModal } from "../store/slices/featues";
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";
import KitHeader from "../components/KitHeader/KitHeader";
import { RootState } from "@/store/store";
import { NextPage } from "next";
import { Data } from "@/Interface/interface";
import { useLoadProducts } from "@/customHooks/loadProduct";
import { perProduct } from "@/utils/consts";
const Home: NextPage<{ posts: Data[] }> = ({ posts }) => {
  const openModal = useSelector((state: RootState) => state.features.openModal);
  const dispatch = useDispatch();
  const [card, setCard] = useState<Data[]>(posts);
  const [uiData, setUiData] = useState(posts[0]);
  const [noOfProducts, setNoOfProducts] = useState(0);
  // const { hasMore, loading } = useLoadProducts(
  //   noOfProducts,
  //   `*[] |[${noOfProducts}...${noOfProducts + 12}] { 
  //   title,slug,description,sanityFilter,images[]{
  //     asset->{url}
  //   },tags,image,category
  // }`,
  //   setCard
  // );
  // const observer = useRef<globalThis.IntersectionObserver | null>(null);

  // interface IntersectionObserverCallback {
  //   (
  //     entries: IntersectionObserverEntry[],
  //     observer: IntersectionObserver
  //   ): void;
  // }

  // interface IntersectionObserverOptions {
  //   root?: Element | null;
  //   rootMargin?: string;
  //   threshold?: number | number[];
  // }

  // interface IntersectionObserverEntry {
  //   boundingClientRect: DOMRectReadOnly;
  //   intersectionRatio: number;
  //   intersectionRect: DOMRectReadOnly;
  //   isIntersecting: boolean;
  //   rootBounds: DOMRectReadOnly | null;
  //   target: Element;
  //   time: number;
  // }

  // interface IntersectionObserver {
  //   new (
  //     callback: IntersectionObserverCallback,
  //     options?: IntersectionObserverOptions
  //   ): IntersectionObserver;
  //   observe: (target: Element) => void;
  //   unobserve: (target: Element) => void;
  //   disconnect: () => void;
  // }

  // const lastBookElementRef = useCallback(
  //   (node: HTMLAnchorElement | null) => {
  //     if (loading) return;

  //     if (observer.current) observer.current.disconnect();

  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setNoOfProducts((prevPageNumber) => prevPageNumber + 12);
  //         alert("ssaas");
  //       }
  //     });

  //     if (node) observer.current.observe(node);

  //     return () => {
  //       if (observer.current) observer.current.disconnect();
  //     };
  //   },
  //   [loading, hasMore]
  // );

  return (
    <>
      {openModal && <DetailsModal data={uiData} />}
      <Header title={["Home"]} breadcrums={["Home"]} />
      {/* <KitHeader /> */}
      <Sidebar isDetail={false} />
      {/* <FilterBar /> */}
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full ">
        <div className=" grid grid-cols-4 2xl1:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] p-[3rem]">
          { card.map((item, index) => {
            if (card.length == index + 1) {
              return (
                <Link
                  href={"product-detail"}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  // ref={lastBookElementRef}
                >
                  <Card
                    key={index}
                    data={item}
                    onClick={() => {
                      document.body.classList.add("overflow-hidden");
                      dispatch(updateModal(true));
                      setUiData(item);
                    }}
                  />
                </Link>
              );
            } else {
              return (
                <Link
                  href={"product-detail"}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Card
                    key={index}
                    data={item}
                    onClick={() => {
                      document.body.classList.add("overflow-hidden");
                      dispatch(updateModal(true));
                      setUiData(item);
                    }}
                  />
                </Link>
              );
            }
          })}
          {/* {card.map((item, key) => (
            <Link
              href={"product-detail"}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Card
                key={key}
                data={item}
                onClick={() => {
                  document.body.classList.add("overflow-hidden");
                  dispatch(updateModal(true));
                  setUiData(item);
                }}
              />
            </Link>
          ))} */}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await sanity.fetch(
      `*[_type=='uitemplate'] |[0...12] { 
    title,slug,description,sanityFilter,images[]{
      asset->{url}
    },tags,image,category
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
}
export default Home;
