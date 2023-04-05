import { updateProModal } from "@/store/slices/featues";
import Image, { ImageProps, StaticImageData } from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import cross from "../../public/assets/icons/cross-white.svg";
import logo from "../../public/assets/images/logo2.png";
import pro1 from "../../public/assets/images/pro1.png";
import pro2 from "../../public/assets/images/pro2.png";
import pro3 from "../../public/assets/images/pro3.png";
import pro4 from "../../public/assets/images/pro4.png";
import pro5 from "../../public/assets/images/pro5.png";
import sphere from "../../public/assets/images/sphere.png";
import heart from "../../public/assets/images/heart.png";
import cancel from "../../public/assets/images/cancel.png";
import star from "../../public/assets/icons/star.svg";

const ProModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="min-w-full min-h-full z-[9908989898989] absolute top-0 left-0 bg-[#000]/[0.6] pt-[10rem]">
      <div className="flex flex-col bg-[#09397B] py-[6.5rem] px-[5rem] overflow-hidden rounded-[1.6rem] justify-center items-center max-w-[63rem] mx-auto relative">
      <Image src={pro1} alt="" className="absolute left-0 top-0 z-[1]" />
      <Image src={pro2} alt="" className="absolute left-0 top-0 " />
      <Image src={pro3} alt=""  className="absolute right-0 top-0 z-[1]"/>
      <Image src={pro4} alt=""  className="absolute right-0 top-0"/>
      <Image src={pro5} alt=""  className="absolute right-0 bottom-0"/>
        
        
        
        
        
        
        <Button
          onClick={() => {
            dispatch(updateProModal(false));
            document.body.classList.remove("!overflow-y-hidden");
          }}
          classes="ml-auto absolute top-[2rem] right-[2rem]"
        >
          <Image src={cross} alt="" />
        </Button>
        <Image src={logo} alt="" className="w-[4rem]" />
        <h3 className="satoshi text-[4rem] font-700 text-[#fff] ">
          Become a Pro
        </h3>
        <p className="text-[1.8rem] font-400 text-[#fff] ">
          Join 56,909 UI UX Designers today!
        </p>
        <div className="flex flex-col gap-[1rem] mt-[2.6rem]">
          <ProTag
            src={sphere}
            title="500+ templates till now! New added daily!"
            description="UI Templates, UX Templates and Full UI Kits used by top designers worldwide."
          />
          <ProTag
            src={heart}
            title="300+ briefs, jobs & resources! New added daily!"
            description="Get access to real life client briefs, remote jobs & resources for UI UX designers!"
          />
          <ProTag
            src={cancel}
            title="Cancel anytime! No strings attached!"
            description="Yes, cancel your plan anytime. Pay monthly and cancel when you need!"
          />

          <Button
            classes={"bg-gradient !py-[2rem] rounded-[5rem] "}
            onClick={() => {
            //   dispatch(updateProModal(true));
            //   document.body.classList.add("!overflow-y-hidden");
            }}
            // onClick={()=>window.open('https://uifry.outseta.com/auth?widgetMode=register#o-anonymous','_blank')}
          >
            <div className="flex justify-center gap-[.8rem]">
              <Image src={star} className="" alt="" />
              <span className="text-[#ffffff] font-[500] text-[2rem] leading-[2.4rem]  flex satoshi">
                Become aPro
              </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProTag = ({
  src,
  title,
  description,
}: {
  src: StaticImageData;
  title: string;
  description: string;
}) => (
  <div className="w-full rounded-[1.6rem] py-[2.2rem] pl-[3rem] pr-[3rem] bg-[#fff] flex gap-[2.5rem] items-center">
    <Image src={src} alt="" className="w-[5rem]" />
    <div className="flex flex-col gap-[.5rem]">
      <span className="satoshi text-primaryBlack text-[1.8rem] font-700 leading-[2.6rem]">
        {title}
      </span>
      <span className="text-secondaryGray text-[1.6rem] font-500 leading-[2.6rem]">
        {description}
      </span>
    </div>
  </div>
);
export default ProModal;
