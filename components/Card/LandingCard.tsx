import { CommingSoonCardProps } from "@/Interface/interface";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import TestimonialCard1 from "./TestimonialCard1";

const LandingCard = ({
  bg,
  categories,
  desc,
  link,
  mainImg,
  replaces,
  testimonial,
  title,
}: CommingSoonCardProps) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="flex gap-[4.8rem] p-[4.8rem] max-w-[128rem] rounded-[1.6rem] lg:flex-col"
    >
      <div className="flex flex-col gap-[2rem] justify-between max-w-[40rem] lg:max-w-full w-full">
        <div className="flex flex-col gap-[2.3rem]">
          <div className="flex flex-col gap-[1.327rem]">
            <span className="text-[4.8rem] satoshi font-700 leading-[120%] text-primaryBlack">
              {title}
            </span>
            <p className="text-secondaryBlack text-[1.4rem] leading-[2.4rem]">
              {desc}
            </p>
          </div>
          <div className="flex flex-col gap-[1.148rem]">
            <span className="text-[1.3rem] font-500 leading-[2.1rem]">
              Replaces
            </span>
            <div className="flex gap-[2rem]">
              {replaces.map((item, index) => (
                <Image key={index} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>
          <Link href={link} className="mt-[1rem] flex items-center gap-[1rem]">
            <span className="text-secondaryBlack text-[1.9rem] leading-[3rem]">
              Learn More
            </span>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.79671 11.1033H14.105L10.0384 15.17C9.71338 15.495 9.71338 16.0283 10.0384 16.3533C10.3634 16.6783 10.8884 16.6783 11.2134 16.3533L16.705 10.8616C17.03 10.5366 17.03 10.0116 16.705 9.68662L11.2217 4.18662C10.8967 3.86162 10.3717 3.86162 10.0467 4.18662C9.72171 4.51162 9.72171 5.03662 10.0467 5.36162L14.105 9.43662H4.79671C4.33838 9.43662 3.96338 9.81162 3.96338 10.27C3.96338 10.7283 4.33838 11.1033 4.79671 11.1033Z"
                fill="url(#paint0_linear_1666_102183)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1666_102183"
                  x1="16.9488"
                  y1="3.94287"
                  x2="2.04478"
                  y2="6.88806"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00B3FF" />
                  <stop offset="1" stopColor="#293FFF" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </div>
        <TestimonialCard1 {...testimonial} />
      </div>
      <div className="flex flex-col flex-1 w-full gap-[3rem]">
        <Image src={mainImg.src} alt={mainImg.alt} className="shadow-cardShadowHover" />
        <div className="grid grid-cols-3 gap-[4.8rem] lg:grid-cols-1">
          {categories.map((item) => (
            <div key={item.title} className="flex flex-col gap-[1.1rem]">
              <span className="text-secondaryBlack text-[1.3rem] leading-[2.1rem] font-600">
                {item.title}
              </span>
              <span className="text-secondaryBlack text-[1.3rem] leading-[2.1rem]">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
