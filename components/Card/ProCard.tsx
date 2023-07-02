import Image from "next/image";
import React from "react";
import userss from "../../public/assets/images/users.svg";
import Button from "../Button/Button";
import star from "../../public/assets/icons/star.svg";
import g1 from "../../public/assets/images/pro-gradient.png";
import g2 from "../../public/assets/images/pro-gradient1.png";
import d1 from "../../public/assets/images/pro-drop1.png";
import d2 from "../../public/assets/images/pro-drop2.png";
import Link from "next/link";

const ProCard = () => {
  return (
    <Link href={"/signup"}  className="max-w-[128rem] relative py-[6.4rem] px-[2rem] overflow-hidden w-full rounded-[2rem] bg-[#0A3E8B] flex flex-col middle gap-[1.9rem]">
      <Image src={g1} alt="gradient1" className="absolute left-0 bottom-0" />
      <Image src={g2} alt="gradient2" className="absolute  right-0 top-0" />
      <Image src={d1} alt="drop1" className="absolute top-[6rem] left-[6rem]" />
      <Image src={d2} alt="drop2" className="absolute top-[6rem] right-[6rem]" />
      <span className="text-[#01B3FF] text-[1.4rem] satoshi tracking-[4.78px] font-700 leading-[2.4rem] text-center z-[10]">
        LET'S GET STARTED!
      </span>
      <div className="flex flex-col middle  z-[10]">
        <h4 className="text-[4rem] satoshi font-700 leading-[5.6rem] text-[#fff] text-center">
          Become a pro® member
        </h4>
        <p className="text-[1.6rem] leading-[3.2rem] text-[#fff] -tracking-[0.16px] text-center">
          Prices going up next week! Special offer is activated for launch week!
        </p>

        <div className="flex items-center mt-[4rem] sm:flex-col middle">
          <Button
            classes={"bg-gradient xl:!bg-[#fff] rounded-[5rem] xl:!p-[1.5rem]"}
            onClick={() => {
              // dispatch(updateProModal(true));
              // document.body.classList.add("!overflow-y-hidden");
              if (window) {
                window.location.href = "/signup";
              }
            }}
            // onClick={()=>window.open('https://uifry.outseta.com/auth?widgetMode=register#o-anonymous','_blank')}
          >
            <div className="flex gap-[.8rem]">
              <Image src={star} className="" alt="" />
              <span className="text-[#ffffff] font-[500] text-[1.6rem] flex satoshi">
                Join Pro
              </span>
            </div>
          </Button>
          <div className="flex flex-1 px-[2rem] sm:mb-[1.5rem] sm:pl-[2rem]  xs:flex-col items-center gap-[1.6rem]">
            <Image src={userss} alt="" />
            <p className="text-[1.6rem] mt-[12px] text-[#fff]">
              Join <span className="font-700 leading-[130%] ">56,000+</span>{" "}
              designers today!
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProCard;
