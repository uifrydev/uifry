import Header from "@/components/Header/Header";
import DetailHeader from "@/components/KitHeader/KitHeader";
import MetaHead from "@/components/MetaHead/MeatHead";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import React from "react";
import profile from "../public/assets/icons/logo1.svg";
import Button from "@/components/Button/Button";

const SubmitDesign = () => {
  return (
    <div>
      <MetaHead
        title="Submit Design - UIFry"
        link="submit-design"
        description="UIFry is the ultimate hub for UI UX designers to grow, learn and smash client work daily with so much more."
      />
      <DetailHeader link="/" />
      <Sidebar isDetail={false} />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem]  w-full ">
        <div className="flex h-[9rem] rounded-[2.4rem] bg-primary w-full">
          <div className="bg-[white] middle w-[9rem] h-[9rem] rounded-full relative top-[2.8rem] left-[50%] -translate-x-[50%] shadow-cardShadow ">
            <Image
              src={profile}
              className="w-[3.8rem]  rounded-full "
              width={80}
              height={80}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[1rem] mt-[6rem]">
          <h1 className="satoshi text-primaryBlack font-[700] text-[3rem] leading-[150%]">
            Submit Your Brief Designs
          </h1>
          <p className="text-secondaryGray text-[1.6rem] text-center leading-[150%] pb-[3rem] border-b-[1px] border-[#E5E9FF] max-w-[76.6rem] -tracking-[0.02px]">
            This is the form to submit your designs which you made while
            practicing our briefs, you will receive feedback from our top
            designers in your email.
          </p>
        </div>
        <form action="" className="max-w-[63.8rem] flex flex-col gap-[2rem] w-full mx-auto mt-[3rem]">
          <input
            type="text"
            placeholder="Full Name"
            className="py-[1.8rem] px-[4.3rem] w-full rounded-full bg-[#faf7fa] text-secondaryGray border-none text-[1.6rem] leading-[150%] outline-none"
          />
          <input
            type="text"
            placeholder="Email address"
            className="py-[1.8rem] px-[4.3rem] w-full rounded-full bg-[#faf7fa] text-secondaryGray border-none text-[1.6rem] leading-[150%] outline-none"
          />
          <textarea
            cols={5}
                
            placeholder="Any comments or information you would like to share"
            className="py-[1.8rem] resize-none px-[4.3rem] w-full h-[15rem] rounded-[2rem] bg-[#faf7fa] text-secondaryGray border-none text-[1.6rem] leading-[150%] outline-none"
          />
          <input
            type="text"
            placeholder="Paste figma link or google drive link for designs"
            className="py-[1.8rem] px-[4.3rem] w-full rounded-full bg-[#faf7fa] text-secondaryGray border-none text-[1.6rem] leading-[150%] outline-none"
          />
          <Button
            classes="mt-[2rem]"
          >
            <span className="satoshi text-[1.6rem] font-500 text-[#F7F8FD] rounded-[3.2rem] px-[2.4rem] py-[1.2rem] bg-gradient">
              {true
                ? "Loading..."
                : "Load More"}
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SubmitDesign;
