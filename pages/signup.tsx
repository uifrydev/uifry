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
import { useDispatch, useSelector } from "react-redux";
import { updateFAQModal, updateProModal } from "@/store/slices/featues";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import FAQsModal from "@/components/FAQModal/FAQModal";
import { RootState } from "@/store/store";
import { isTokenPresent } from "@/utils/functions";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import withRedirectIfUserPresent from "@/components/UserRedirection/UserRedirection";
import useOutseta from "@/customHooks/useOutseta";
import MetaHead from "@/components/MetaHead/MeatHead";
import { NextResponse } from "next/server";
import withAuth from "@/customHooks/withAuth";
import Sticker2 from "@/components/Sticker/Sticker2";
const signup = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { faqModal } = useSelector((state: RootState) => state.features);
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const { openLogin } = useOutseta();
  useEffect(() => {
    console.log({ user: localStorage.getItem("token") });
    // if (localStorage.getItem("token")) {
    //   router.push("/");
    // }
    const sticker = document.getElementById("sticker");
    sticker?.classList.add("!hidden");
    dispatch(updateProModal(false));
    document.body.classList.remove("!overflow-y-hidden");
    // const script = document.createElement("script");
    // script.src = "https://cdn.outseta.com/outseta.min.js";
    // script.setAttribute("data-options", JSON.stringify(o_signup_options));
    // document.body.appendChild(script);
    return () => {
      sticker?.classList.remove("!hidden");
    };
  }, [router.asPath]);

  return (
    <>
      <MetaHead
        title="Signup - UIFry"
        link="signup"
        description="UIFry is the ultimate hub for UI UX designers to grow, learn and smash client work daily with so much more."
      />
      <div className="flex flex-col items-center w-full min-h-[100vh] bg-primary">
        <Sticker2 hideBtn={true} classes={"!rounded-none mx-auto"} />
        <div className="flex max-w-[144rem] w-full xl:items-center xl:flex-col">
          <div className="flex flex-col flex-1 xl:w-full pt-[3.5rem] px-[5rem] sm:px-[2rem]">
            <div className="flex justify-between pb-[4.2rem] items-center border-b-[1px] border-border2">
              <Link href={"/"}>
                <Image src={logo} alt={""} />
              </Link>
              <p className="text-secondaryGray text-[1.6rem] leading-[2.9rem] sm:hidden">
                Already have an account?
                <span
                  onClick={openLogin}
                  className="text-[#00B3FF] cursor-pointer font-700"
                >
                  {" "}
                  Login
                </span>
              </p>
            </div>
            <h2 className="mt-[2.5rem] xl:text-center text-primaryBlack font-700 text-[3.4rem] leading-[5.4rem] satoshi">
              Join Pro & Get <span className="gradient-text"> Unlimited </span> Access!
            </h2>
            <p className="text-secondaryGray xl:text-center text-[1.6rem] leading-[2.9rem] mb-[1.5rem]">
              Download 100s of templates, UI UX kits, jobs, briefs, style guides and more!
            </p>
            <TagList classes="xl:hidden" />
            <PaymentTag />
            <div className="flex xl:flex-col justify-between items-center xl:hidden mt-[2rem] mb-[2rem] w-full">
              <p className="text-secondaryGray text-[1.6rem] leading-[2.9rem] mt-[2rem] order-1 xl:order-2">
                All Rights Reserved 2023® UIFry LTD
              </p>
              <ul className="flex gap-[1rem] order-2 xl:order-1 cursor-pointer">
                <li
                  onClick={() => {
                    document.body.classList.add("!overflow-y-hidden");

                    dispatch(updateFAQModal(true));
                  }}
                >
                  <span className="text-[#00B3FF] text-[1.6rem] leading-[2.9rem]">
                    FAQ's
                  </span>
                </li>
                <li>
                  <Link
                    href={"https://uifry.outseta.com/support/kb/categories"}
                    target="_blank"
                    className="text-[#00B3FF] text-[1.6rem] leading-[2.9rem]"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex max-w-[59rem] mt-[2rem] sm:max-w-[36rem] mr-[6rem] xs:max-w-[32rem] w-full rounded-[1rem] bg-white shadow-signup xl:mt-[3.2rem] mb-[4rem] xl:rounded-[2.4rem]">
            <div id="signup-embed"></div>
            {/* <OutsetaEmbed /> */}
          </div>
          <TagList classes="hidden xl:flex max-w-[52rem] mt-[4.5rem]" />
          <div className="xl:flex-col justify-between items-center xl:flex hidden mt-[2rem] mb-[2rem] w-full">
            <p className="text-secondaryGray text-[1.6rem] leading-[2.9rem] mt-[2rem] order-1 xl:order-2">
              All Rights Reserved 2023® UIFry LTD
            </p>
            <ul className="flex gap-[1rem] order-2 xl:order-1 cursor-pointer">
              <li
                onClick={() => {
                  document.body.classList.add("!overflow-y-hidden");

                  dispatch(updateFAQModal(true));
                }}
              >
                <span className="text-[#00B3FF] text-[1.6rem] leading-[2.9rem]">
                  FAQ's
                </span>
              </li>
              <li>
                <Link
                  href={"https://uifry.outseta.com/support/kb/categories"}
                  target="_blank"
                  className="text-[#00B3FF] text-[1.6rem] leading-[2.9rem]"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const TagList = ({ classes }: { classes?: string }) => {
  return (
    <div
      className={`flex flex-col gap-[1rem] mt-[1rem] sm:px-[2rem] ${classes}`}
    >
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
      {/* <ProTag
        src={cancel}
        title="Cancel anytime! No strings attached!"
        description="Yes, cancel your plan anytime. Pay monthly and cancel when you need!"
        classes="!pb-[2.5rem] !pt-[2.2rem] "
        imageClass="w-[6rem]"
      /> */}
    </div>
  );
};

export default signup;
