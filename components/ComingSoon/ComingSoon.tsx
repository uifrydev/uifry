import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import item from "../../public/assets/images/loader.json";
import comming1 from "../../public/assets/images/coming1.png";
import comming2 from "../../public/assets/images/coming2.png";
import comming3 from "../../public/assets/images/coming3.png";
import logo from "../../public/assets/images/logo-beta.png";
import Image from "next/image";
import sphere from "../../public/assets/images/sphere.png";
import unlimited from "../../public/assets/images/unlimited.png";
import heart from "../../public/assets/images/heart.png";
import ProTag from "../ProModal/ProTag";
const ComingSoon = () => {
  return (
    <div className="w-full min-h-[100vh] relative flex flex-col  items-center px-[6rem] pt-[6rem] pb-[13rem] md:px-[3rem] bg-[#F6F9FC]">
      <Image alt="" src={comming1} className="absolute top-0 left-0 " />
      <Image alt="" src={comming2} className="absolute top-[12rem] md:top-[48rem] right-0" />
      <Image
        alt=""
        src={comming3}
        className="absolute bottom-0 left-[12.5rem] sm:left-[5rem] w-[22rem]"
      />
      <div className="w-full pb-[3.7rem] border-b-[1px] flex justify-center">
        <Image src={logo} alt="" />
      </div>
      <div className="flex flex-col gap-[2rem] items-center justify-center z-[10]">
        <Player src={item} className="relative w-[12.2rem]" autoplay loop />
        <div className="flex flex-col justify-center items-center">
          <h2 className="satoshi text-primaryBlack font-700 text-[4rem] leading-[5.3rem] text-center">
            Launching Soon!
          </h2>
          <p className="text-secondaryGray text-[1.6rem] leading-[2.9rem] text-center">
            We at UIFry are working day and night to bring you beta version of
            the app!
          </p>
          <div
            className={`flex flex-col gap-[1rem] mt-[1rem] sm:px-[2rem] `}
          >
            <ProTag
              src={unlimited}
              title="Unlimited downloads and access!"
              description="Get unlimited access to UI templates, UI UX kits, briefs and more."
              classes="!pb-[2.5rem] !pt-[2.2rem] !border-none"
            />
            <ProTag
              src={sphere}
              title="500+ templates till now! New added daily!"
              description="UI Templates, UX Templates and Full UI Kits used by top designers worldwide."
              classes="!pb-[2.5rem] !pt-[2.2rem] !border-none"
            />
            <ProTag
              src={heart}
              title="300+ briefs, jobs & resources! New added daily!"
              description="Get access to real life client briefs, remote jobs & resources for UI UX designers!"
              classes="!pb-[2.5rem] !pt-[2.2rem] !border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
