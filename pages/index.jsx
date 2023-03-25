import React, { useEffect, useState } from "react";
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
const Home = ({ posts }) => {
  const openModal = useSelector((state) => state.features.openModal);
  const builder = imageUrlBuilder(sanity);
  const urlFor = (source) => {
    return builder.image(source);
  };
  const dispatch = useDispatch();
  const [card, setCard] = useState(posts);
  const [modalData, setModalData] = useState(null);
  // useEf

  return (
    <>
      {openModal && <DetailsModal />}
      <Header title={['Home']} breadcrums={['Home']}  />
      {/* <KitHeader /> */}
      <Sidebar />
      {/* <FilterBar /> */}
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full ">
        <div className=" grid grid-cols-4 2xl1:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] p-[3rem]">
          {card.map((item, key) => (
            <Link
              href={"product-detail"}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Card
                key={key}
                index={key}
                data={item}
                onClick={() => {
                  document.body.classList.add("overflow-hidden");
                  dispatch(updateModal(true));
                }}
              />
            </Link>
          ))}
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
