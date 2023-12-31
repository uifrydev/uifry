import { updateProModal } from "@/store/slices/featues";
import Image, { ImageProps, StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
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
import unlimited from "../../public/assets/images/unlimited.png";
import heart from "../../public/assets/images/heart.png";
import cancel from "../../public/assets/images/cancel.png";
import star from "../../public/assets/icons/star.svg";
import Link from "next/link";
import { setLoading } from "@/store/slices/auth";
import { loadOutseta } from "@/utils/outseta";
import ProTag from "./ProTag";
import { useRouter } from "next/router";
import useOutseta from "@/customHooks/useOutseta";

const ProModal = ({ classes }: { classes?: string }) => {
  const dispatch = useDispatch();
  const { openLogin } = useOutseta();
  return (
    <div
      className={`min-w-full pb-[3rem] h-full z-[9908989898989] overflow-y-scroll ease-linear fixed top-0 left-0 bg-[#000]/[0.6] pt-[5rem] ${classes}`}
    >
      <div className="flex flex-col bg-[#09397B] py-[3rem] px-[4.7rem] overflow-hidden rounded-[2.4rem] justify-center items-center max-w-[58rem] mx-auto relative">
        <Image src={pro1} alt="" className="absolute left-0 top-0 z-[1]" />
        <Image src={pro2} alt="" className="absolute left-0 top-0 " />
        <Image src={pro3} alt="" className="absolute right-0 top-0 z-[1]" />
        <Image src={pro4} alt="" className="absolute right-0 top-0" />
        <Image src={pro5} alt="" className="absolute right-0 bottom-0" />

        <Button
          onClick={() => {
            dispatch(updateProModal(false));
            document.body.classList.remove("!overflow-y-hidden");
          }}
          classes="ml-auto absolute top-[.4rem] -right-[1rem] z-[10]"
        >
          <Image src={cross} alt="" />
        </Button>
        <Image src={logo} alt="" className="w-[5rem]" />
        <h3 className="satoshi text-[3.2rem] font-700 text-[#fff] ">
          Become a Pro
        </h3>
        <p className="text-[1.4rem] font-400 leading-[2.9rem] text-[#fff] ">
          Join 56,909 UI UX Designers today!
        </p>
        <div className="flex flex-col gap-[1rem] mt-[2rem]">
          <ProTag
            src={unlimited}
            title="Unlimited downloads and access!"
            description="Get unlimited access to UI templates, UI UX kits, briefs and more."
          />
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
          {/* <Link
            href={"/signup"}
            className="w-full"
          > */}
          <Button
            classes={"bg-gradient !py-[2rem] rounded-[5rem] w-full"}
            onClick={() => {
              dispatch(updateProModal(false));
              document.body.classList.remove("!overflow-y-hidden");
              //   router.push("/signup");
              if (window) {
                window.location.href = "/signup";
              }
            }}
            // onClick={()=>window.open('https://uifry.outseta.com/auth?widgetMode=register#o-anonymous','_blank')}
          >
            <div className="flex justify-center gap-[.8rem]">
              <Image src={star} className="" alt="" />
              <span className="text-[#ffffff] font-[500] text-[2rem] leading-[2.4rem]  flex satoshi">
                Become a Pro
              </span>
            </div>
          </Button>
          <p className="text-[#fff] text-[1.6rem] max-w-[30rem] font-400 mt-[1.5rem] mx-auto">
            Already a pro member?{" "}
            <span
              onClick={openLogin}
              className="underline cursor-pointer font-700"
            >
              Login here
            </span>
          </p>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ProModal;
