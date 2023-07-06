import { updateFAQModal, updateProModal } from "@/store/slices/featues";
import Image, { ImageProps, StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import cross from "../../public/assets/icons/cross.svg";
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
import FAQTag from "./FAQTag";

const FAQsModal = ({ classes }: { classes?: string }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`min-w-full pb-[3rem] h-full z-[9908989898989] overflow-y-scroll ease-linear fixed top-0 left-0 bg-[#000]/[0.6] pt-[5rem] ${classes}`}
    >
      <div className="flex flex-col bg-[#fff] py-[3rem] px-[4.7rem] overflow-hidden rounded-[2.4rem] justify-center items-center max-w-[61rem] mx-auto relative">
        <Image src={faq1} alt="" className="absolute left-0 top-0 z-[1]" />
        <Image src={faq2} alt="" className="absolute right-0 top-0 " />
        <Button
          onClick={() => {
            dispatch(updateFAQModal(false));
            document.body.classList.remove("!overflow-y-hidden");
          }}
          classes="ml-auto absolute top-[.4rem] -right-[1rem] z-[10]"
        >
          <Image src={cross} alt="" />
        </Button>

        <h3 className="satoshi text-[3.6rem] font-700 text-primaryBlack ">
          FAQ's
        </h3>
        <p className="text-[1.4rem] font-400 leading-[2.9rem] text-secondaryGray ">
          Some frequently asked questions
        </p>

        <div className="flex flex-col mt-[2rem] gap-[1.5rem]">
          <FAQTag
            description={
              <p className="text-secondaryGray text-[1.4rem] sm:text-center font-500 leading-[150%]">
                Free trials were a limited time offer and are no longer
                available in any country. This offer ended in March, 2023.
              </p>
            }
            title="Does UIFry offer a free trial?"
          />
          <FAQTag
            description={
              <p className="text-secondaryGray text-[1.4rem] sm:text-center font-500 leading-[150%]">
                Yes, you can cancel your subscription anytime but you will be
                charged for the whole month period and there will no amount be
                refunded! Please refer to our{" "}
                <Link href={"/privacy-policy"} className="text-[#00B3FF]">
                  policies here
                </Link>
              </p>
            }
            title="Can I cancel my subscription anytime?"
          />
          <FAQTag
            description={
              <p className="text-secondaryGray text-[1.4rem] sm:text-center font-500 leading-[150%]">
                UIFry is a platform which allows unlimited downloads and access
                to resources on a Pro Plan. Please visit{" "}
                <Link href={"/fair-policy"} className="text-[#00B3FF]">
                  Fair Use Policy
                </Link>{" "}
                to understand more about inappropriate download and access
                behaviour
              </p>
            }
            title="Do any limits apply to downloads, briefs & resources?"
          />
          <FAQTag
            description={
              <p className="text-secondaryGray text-[1.4rem] sm:text-center font-500 leading-[150%]">
                Due to the way download managers interact with our servers you
                may encounter unexpected issues, we, therefore, recommend
                against using these when downloading from UIFry.
              </p>
            }
            title="Can I use a Download Manager?"
          />
          <FAQTag
            description={
              <p className="text-secondaryGray text-[1.4rem] sm:text-center font-500 leading-[150%]">
                Yes, UIFry is available in all countries. If for some reason,
                you are not able to use UIFry in your country, please submit a{" "}
                <Link
                  href={"https://uifry.outseta.com/support/kb/categories"}
                  target="_blank"
                  className="text-[#00B3FF]"
                >
                  ticket here.
                </Link>
              </p>
            }
            title="Is UIFry available in all countries?"
          />
          <Button
            onClick={() => {
              window.open("https://uifry.outseta.com/support/kb/categories");
            }}
            classes="bg-gradient p-[2rem] rounded-full "
          >
            <span className="text-[#fff] satoshi text-[1.6rem] font-500 leading-[150%]">
              Contact Us For Any More Questions
            </span>
          </Button>
          <p className="text-center text-[1.4rem] leading-[2.9rem] text-secondaryGray">
            Please refer to our policies, terms & conditions{" "}
            <Link href={"/license-agreement"} className="text-[#00B3FF]">
              here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQsModal;
