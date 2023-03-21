import React, { FC } from "react";
import cross from "../../public/assets/icons/cross.svg";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
import { useDispatch } from "react-redux";
import { updateModal } from "../../store/slices/featues";
import ProductDetail2 from "../ProductDetail/ProductDetail2";
import { NextPage } from "next";
import { Data } from "@/Interface/interface";
const DetailsModal1:FC<Data> = ({data}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col  absolute z-[1000] gap-[1.6rem] top-0 left-0 w-full overflow-y-scroll h-[100vh] bg-[#15191D]/[0.9] min-xl:px-[9rem] min-lg:px-[2rem] min-lg:pt-[15rem]">
      <div
        onClick={() => {
          document.body.classList.remove("overflow-hidden");
          dispatch(updateModal(false));
        }}
        className="flex cursor-pointer lg:hidden p-[1.5rem] bg-[#ffffff] rounded-full ml-auto "
      >
        <Image src={cross} className="w-[1.4rem] h-[1.4rem]" alt="" />
      </div>
      <ProductDetail2 data={data} showCross={true} />
    </div>
  );
};

export default DetailsModal1;
