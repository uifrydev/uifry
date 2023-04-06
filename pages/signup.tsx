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
const signup = () => {
  const [loading, setLoading] = useState(true);
  const o_signup_options = {
    id: "Outseta",
    domain: "uifry.outseta.com",
    load: "auth",
    auth: {
      widgetMode: "register",
      planFamilyUid: "wmjrZxmV",
      planPaymentTerm: "month",
      skipPlanOptions: true,
      id: "signup_embed",
      mode: "embed",
      selector: "#signup-embed",
    },
  };
  useEffect(() => {
    const sticker = document.getElementById("sticker");
    sticker?.classList.add("!hidden");

    //     const script = document.createElement("script");
    //     script.src = "https://cdn.outseta.com/outseta.min.js";
    //     script.setAttribute("data-options", JSON.stringify(o_signup_options));
    //     document.body.appendChild(script);
    return () => {
      sticker?.classList.add("!remove");
    };
  }, []);
  return (
    <>
      <div className="flex w-full h-full justify-center bg-[#F6F9FC]">
        <div className="flex max-w-[144rem]">
          <div className="flex flex-col flex-1 pr-[7rem] pt-[3.5rem] pl-[3rem]">
            <div className="flex justify-between pb-[3.6rem] items-center border-b-[1px] border-[#E5E9FF]">
              <Link href={"/"}>
                <Image src={logo} alt={""} />
              </Link>
              <p className="text-secondaryGray text-[1.6rem] leading-[2.9rem] ">
                Already have an account?
                <span className="text-[#00B3FF] cursor-pointer font-700">
                  {" "}
                  Login
                </span>
              </p>
            </div>
            <h2 className="mt-[2.5rem] text-primaryBlack font-700 text-[4rem] leading-[5.4rem] satoshi">
              Become a Pro
            </h2>
            <p className="text-secondaryGray text-[1.6rem] leading-[2.9rem] mb-[2.5rem]">
              Join 56,909 UI UX Designers today!
            </p>
            <div className="flex flex-col gap-[1rem] mt-[2.6rem]">
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
            </div>
            <PaymentTag />
            <p className="text-secondaryGray text-[1.6rem] leading-[2.9rem] mt-[2rem] pb-[33rem]">
              By purchasing UIFry Pro, you agree to our terms, conditions and
              all policies which are listed
              <span className="text-[#00B3FF] cursor-pointer font-700">
                {" "}
                here
              </span>
              .
            </p>
          </div>
          <div className="flex w-[64rem] bg-white">
            <div id="signup-embed"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;