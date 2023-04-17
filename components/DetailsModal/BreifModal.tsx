import React, { FC } from "react";
import cross from "../../public/assets/icons/cross.svg";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
import { useDispatch } from "react-redux";
import { updateBriefModal, updateModal } from "../../store/slices/featues";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductDetail2 from "../ProductDetail/ProductDetail2";
import { Data } from "@/Interface/interface";
import BriefDetail from "../ProductDetail/BriefDetail";
const BriefModal = ({ data,setData }:{
  data?: Data;
  setData?: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col totop sticky z-[10000001] gap-[1.6rem] top-0 left-0 w-full overflow-y-scroll h-[100vh] bg-[#15191D]/[0.9] min-lg:px-[2rem] min-lg:py-[3rem]">
      <div
        onClick={() => {
          document.body.classList.remove("!overflow-y-hidden");
          dispatch(updateBriefModal(false));
        }}
        className="flex cursor-pointer lg:hidden p-[1.5rem] bg-[#ffffff] rounded-full ml-auto "
      >
        <Image src={cross} className="w-[1.4rem] h-[1.4rem]" alt="" />
      </div>
      <BriefDetail data={data} showCross={true} setData={setData} />
    </div>
  );
};

export default BriefModal;
