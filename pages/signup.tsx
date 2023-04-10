import ProTag from "@/components/ProModal/ProTag";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/assets/images/logobeta.svg";
import sphere from "../public/assets/images/sphere.png";
import unlimited from "../public/assets/images/unlimited.png";
import heart from "../public/assets/images/heart.png";
import cancel from "../public/assets/images/cancel.png";
import PaymentTag from "@/components/PaymentTag/PaymentTag";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { updateProModal } from "@/store/slices/featues";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const OutsetaEmbed = dynamic(
  () => import("../components/OutsetaEmbedSignup/OutsetaEmbedSignup"),
  {
    ssr: false,
  }
);
const signup = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const sticker = document.getElementById("sticker");
    sticker?.classList.add("!hidden");
    dispatch(updateProModal(false));
    document.body.classList.remove("!overflow-y-hidden");

    //     const script = document.createElement("script");
    //     script.src = "https://cdn.outseta.com/outseta.min.js";
    //     script.setAttribute("data-options", JSON.stringify(o_signup_options));
    //     document.body.appendChild(script);
    return () => {
      sticker?.classList.remove("!hidden");
    };
  }, [router.asPath]);
  return (
    <>
      <div className="flex flex-col items-center w-full min-h-[100vh] bg-primary">
        <div className="flex max-w-[144rem] w-full items-center xl:flex-col">
          <div className="flex flex-col flex-1 xl:w-full pr-[7rem] pt-[3.5rem] pl-[5rem] sm:px-[2rem]">
            <div className="flex justify-between pb-[3.6rem] items-center border-b-[1px] border-[#E5E9FF]">
              <Link href={"/"}>
                <Image src={logo} alt={""} />
              </Link>
              <p className="text-secondaryGray text-[1.6rem] leading-[2.9rem] sm:hidden">
                Already have an account?
                <span onClick={()=>{}} className="text-[#00B3FF] cursor-pointer font-700">
                  {" "}
                  Login
                </span>
              </p>
            </div>
            <h2 className="mt-[2.5rem] xl:text-center text-primaryBlack font-700 text-[3.4rem] leading-[5.4rem] satoshi">
              Become a Pro
            </h2>
            <p className="text-secondaryGray xl:text-center text-[1.6rem] leading-[2.9rem] mb-[1.5rem]">
              Join 56,909 UI UX Designers today!
            </p>
            <TagList classes="xl:hidden" />
            <PaymentTag />
            <p className="text-secondaryGray text-[1.6rem] leading-[2.9rem] mt-[2rem] xl:hidden">
              By purchasing UIFry Pro, you agree to our terms, conditions and
              all policies which are listed
              <span className="text-[#00B3FF] cursor-pointer font-700">
                {" "}
                here
              </span>
              .
            </p>
          </div>
          <div className="flex max-w-[64rem] w-full rounded-b-[1rem] bg-white shadow-signup xl:mt-[3.2rem] xl:rounded-[2.4rem]">
            <div id="signup-embed"></div>
            {/* <OutsetaEmbed /> */}
          </div>
          <TagList classes="hidden xl:flex max-w-[52rem] mt-[4.5rem]" />
        </div>
        <div className="flex xl:flex-col justify-between items-center mt-[2rem] mb-[2rem] w-full max-w-[144rem]  px-[3rem] pl-[5rem]">
          <p className="text-secondaryGray text-[1.6rem] leading-[2.9rem] mt-[2rem] order-1 xl:order-2">
            All Rights Reserved 2023® UIFry LTD
          </p>
          <ul className="flex gap-[1rem] order-2 xl:order-1">
            <li>
              <Link
                href={""}
                className="text-[#00B3FF] text-[1.6rem] leading-[2.9rem]"
              >
                FAQ's
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-[#00B3FF] text-[1.6rem] leading-[2.9rem]"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const TagList=({classes}:{classes?:string})=>{
  return <div className={`flex flex-col gap-[1rem] mt-[1rem] sm:px-[2rem] ${classes}`}>
  <ProTag
    src={unlimited}
    title="Unlimited downloads and access!"
    description="Get unlimited access to UI templates, UI UX kits, briefs and more."
    classes="!pb-[2.5rem] !pt-[2.2rem] "
  />
  <ProTag
    src={sphere}
    title="500+ templates till now! New added daily!"
    description="UI Templates, UX Templates and Full UI Kits used by top designers worldwide."
    classes="!pb-[2.5rem] !pt-[2.2rem] "
  />
  <ProTag
    src={heart}
    title="300+ briefs, jobs & resources! New added daily!"
    description="Get access to real life client briefs, remote jobs & resources for UI UX designers!"
    classes="!pb-[2.5rem] !pt-[2.2rem] "
  />
  <ProTag
    src={cancel}
    title="Cancel anytime! No strings attached!"
    description="Yes, cancel your plan anytime. Pay monthly and cancel when you need!"
    classes="!pb-[2.5rem] !pt-[2.2rem] "
    imageClass="w-[6rem]"
  />
</div>
}

export default signup;
