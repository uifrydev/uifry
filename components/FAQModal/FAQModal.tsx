import { updateProModal } from "@/store/slices/featues";
import Image, { ImageProps, StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import cross from "../../public/assets/icons/cross-white.svg";
import logo from "../../public/assets/images/logo2.png";
import faq1 from "../../public/assets/images/faq1.png";
import faq2 from "../../public/assets/images/faq2.png";

import sphere from "../../public/assets/images/sphere.png";
import unlimited from "../../public/assets/images/unlimited.png";
import heart from "../../public/assets/images/heart.png";
import cancel from "../../public/assets/images/cancel.png";
import star from "../../public/assets/icons/star.svg";
import Link from "next/link";
import { setLoading } from "@/store/slices/auth";
import { loadOutseta } from "@/utils/outseta";
import { useRouter } from "next/router";
import useOutseta from "@/customHooks/useOutseta";

const FAQsModal = ({ classes }: { classes?: string }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`min-w-full pb-[3rem] h-full z-[9908989898989] overflow-y-scroll ease-linear fixed top-0 left-0 bg-[#000]/[0.6] pt-[5rem] ${classes}`}
    >
      <div className="flex flex-col bg-[#09397B] py-[3rem] px-[4.7rem] overflow-hidden rounded-[2.4rem] justify-center items-center max-w-[58rem] mx-auto relative">
        <Image src={faq1} alt="" className="absolute left-0 top-0 z-[1]" />
        <Image src={faq2} alt="" className="absolute right-0 top-0 " />
       

       
       
      </div>
    </div>
  );
};

export default FAQsModal;
