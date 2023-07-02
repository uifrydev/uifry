import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Sticker3 from "../Sticker/Sticker3";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import circle from "../../public/assets/images/circle.png";
import line from "../../public/assets/images/line5.png";
import ssHome from "../../public/assets/images/sshome.png";
import Image from "next/image";
import { Soon, landingCardData, testimonials } from "@/utils/data";
import TestimonialCard from "../Card/TestimonialCard";
import LandingCard from "../Card/LandingCard";
import CommingSoonCard from "../Card/CommingSoonCard";
import ProCard from "../Card/ProCard";
import logo from "../../public/assets/images/logobeta.svg";
import Link from "next/link";
// import uifry from '../../public/assets/videos/uifry.webm'
const LandingPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Header
        title={["Home"]}
        istitle={false}
        breadcrums={["Home"]}
        isHome={true}
      />

      <div className="flex flex-col middle w-full bg-[#F6F9FC] py-[4.91rem] px-[2rem]">
        <div className="max-w-[144rem] w-full flex flex-col middle gap-[4rem]">
          <div className="flex flex-col middle gap-[1.53rem]">
            {!user ? (
              <h2 className="satoshi max-w-[84rem] text-center text-primaryBlack text-[5.2rem] font-[700] leading-[120%]">
                Unlimited access to
                <span className="gradient-text"> Premium UI/UX </span>
                designs, jobs, templates, and briefs
              </h2>
            ) : (
              <h2 className="satoshi max-w-[83rem] text-center text-primaryBlack text-[5.2rem] font-[700] leading-[120%]">
                Welcome,
                <span className="gradient-text">
                  {" "}
                  {user?.FullName.split(" ")[0]}
                </span>
              </h2>
            )}
            <p className="text-[2rem] font-[400] max-w-[74rem] text-center text-secondaryGray leading-[150%]">
              UI Templates, UI UX kits, briefs, style guides, jobs, fonts - it's
              all here. UIFry provides UI UX designers with
              <span className="satoshi text-primaryBlack font-700 relative">
                {" "}
                everything{" "}
                <Image
                  src={circle}
                  alt="circle"
                  className="absolute -top-[.1rem] -left-[.1rem] w-full h-[3rem]"
                />
              </span>{" "}
              they need to
              <span className="satoshi text-primaryBlack font-700 relative">
                {" "}
                grow, learn
              </span>
              , excel in their{" "}
              <span className="satoshi text-primaryBlack font-700 relative">
                {" "}
                projects
              </span>
              , build their
              <span className="satoshi text-primaryBlack font-700 relative">
                {" "}
                portfolios
              </span>
              , and deliver
              <span className="satoshi text-primaryBlack font-700 relative">
                {" "}
                work 100x faster!{" "}
                <Image
                  src={line}
                  alt="circle"
                  className="absolute -bottom-[1rem] -left-[.1rem] w-[110%]"
                />
              </span>
            </p>
          </div>

          {/* <div className="max-w-[99.5rem] shadow-cardShadowHover border-[4px] border-[#fff] rounded-[1.6rem]">
            <Image src={ssHome} alt="home screenshot" className="w-full" />
          </div> */}
          <div className="max-w-[99.5rem] overflow-hidden  border-[4px] border-[#fff] rounded-[1.6rem]">
            <video autoPlay loop muted className="">
              <source type="video/webm" src="/assets/videos/uifry1.webm" />
            </video>
          </div>

          <div className="flex flex-col middle gap-[4.44rem]">
            <h3 className="satoshi max-w-[84rem] mt-[7rem] text-center text-primaryBlack text-[4.8rem] font-[700] leading-[120%]">
              “Everything for a UI/UX designer -
              <span className="gradient-text relative">
                {" "}
                new resources{" "}
                <Image
                  src={line}
                  alt="circle"
                  className="absolute -bottom-[1rem] z-[10] -left-[.1rem] w-[110 %]"
                />
              </span>
              added each week!”
            </h3>
            <div className="max-w-[130rem] grid grid-cols-3 gap-[3.2rem] items-start lg:grid-cols-2 sm:grid-cols-1">
              {testimonials.map((item) => (
                <TestimonialCard {...item} key={item.designation} />
              ))}
            </div>
          </div>
          <div className="flex flex-col middle max-w-[144.2rem] w-full gap-[5.5rem] bg-[#fff] rounded-[6rem] py-[8rem] px-[2rem]">
            {landingCardData.map((item, key) => (
              <LandingCard key={key} {...item} />
            ))}
          </div>
          <div className="flex flex-col middle gap-[6.4rem]">
            <h3 className="satoshi max-w-[86rem] mt-[7rem] text-center text-primaryBlack text-[4.8rem] font-[700] leading-[120%]">
              Join today and lock in your pro price to access these
              <span className="gradient-text"> upcoming</span>
              <span className="relative">
                {" "}
                features!{" "}
                <Image
                  src={line}
                  alt="circle"
                  className="absolute -bottom-[1rem] z-[10] -left-[.1rem] w-[110%]"
                />
              </span>
            </h3>
            <div className="grid grid-cols-3 lg1:grid-cols-2 gap-[3.3rem] sm:grid-cols-1 max-w-[128rem] w-full">
              {Soon.map((item) => (
                <CommingSoonCard {...item} />
              ))}
            </div>
          </div>
          <>
            <ProCard />
          </>
        </div>
        <div className="flex max-w-[128rem] w-full gap-[2rem] items-center justify-between mt-[8.5rem]">
          <div className="flex gap-[3rem] items-center">
            <Image src={logo} alt="logo" />
            <span className="text-primaryBlack text-[1.6rem] leading-[3.2rem] mt-[1rem]">
              Premium Resources For UI UX Designers
            </span>
          </div>
          <div className="flex gap-[1rem]">
            <span className="text-secondaryGray text-[1.4rem] leading-[2.4rem]">
              Follow us on social media |{" "}
            </span>
            <ul className="flex middle gap-[1.6rem]">
              <li>
                <Link href={"https://www.linkedin.com/company/ui-fry/"}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5324 16.7543H15.5337V13.6215C15.5337 12.8745 15.5188 11.913 14.4913 11.913C13.4495 11.913 13.2905 12.726 13.2905 13.5667V16.7543H11.2909V10.3125H13.2109V11.19H13.2373C13.5058 10.6845 14.1583 10.1497 15.1333 10.1497C17.1583 10.1497 17.5333 11.4832 17.5333 13.218V16.7543H17.5324ZM9.0335 9.43125C8.88092 9.43145 8.72979 9.40153 8.5888 9.3432C8.4478 9.28488 8.3197 9.1993 8.21184 9.09138C8.10398 8.98345 8.01849 8.85529 7.96026 8.71426C7.90203 8.57322 7.8722 8.42208 7.8725 8.2695C7.87265 8.03988 7.94088 7.81545 8.06858 7.62461C8.19628 7.43377 8.3777 7.28508 8.5899 7.19734C8.8021 7.1096 9.03555 7.08676 9.26074 7.13171C9.48592 7.17665 9.69272 7.28736 9.85498 7.44983C10.0172 7.6123 10.1277 7.81925 10.1723 8.04449C10.217 8.26973 10.1938 8.50315 10.1058 8.71524C10.0178 8.92733 9.8689 9.10855 9.67789 9.236C9.48689 9.36345 9.26237 9.4314 9.03275 9.43125H9.0335ZM10.0355 16.7543H8.03075V10.3125H10.0363V16.7543H10.0355ZM18.5338 5.25H7.028C6.476 5.25 6.03125 5.685 6.03125 6.22275V17.7772C6.03125 18.315 6.47675 18.75 7.02725 18.75H18.5308C19.0813 18.75 19.5312 18.315 19.5312 17.7772V6.22275C19.5312 5.685 19.0813 5.25 18.5308 5.25H18.5331H18.5338Z"
                      fill="#B6B9CE"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href={"https://www.instagram.com/uifryy/"}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2812 4C15.3191 4 15.5733 4.0075 16.3728 4.045C17.1715 4.0825 17.7153 4.20775 18.1938 4.39375C18.6888 4.58425 19.1058 4.84225 19.5228 5.2585C19.9042 5.63342 20.1993 6.08694 20.3876 6.5875C20.5728 7.06525 20.6987 7.60975 20.7362 8.4085C20.7715 9.208 20.7812 9.46225 20.7812 11.5C20.7812 13.5378 20.7737 13.792 20.7362 14.5915C20.6987 15.3902 20.5728 15.934 20.3876 16.4125C20.1998 16.9133 19.9046 17.367 19.5228 17.7415C19.1478 18.1227 18.6943 18.4178 18.1938 18.6063C17.716 18.7915 17.1715 18.9175 16.3728 18.955C15.5733 18.9903 15.3191 19 13.2812 19C11.2434 19 10.9892 18.9925 10.1897 18.955C9.391 18.9175 8.84725 18.7915 8.36875 18.6063C7.86799 18.4184 7.4144 18.1232 7.03975 17.7415C6.6583 17.3666 6.3632 16.9131 6.175 16.4125C5.989 15.9347 5.86375 15.3902 5.82625 14.5915C5.791 13.792 5.78125 13.5378 5.78125 11.5C5.78125 9.46225 5.78875 9.208 5.82625 8.4085C5.86375 7.609 5.989 7.066 6.175 6.5875C6.36268 6.08663 6.65785 5.63299 7.03975 5.2585C7.4145 4.87692 7.86807 4.5818 8.36875 4.39375C8.84725 4.20775 9.39025 4.0825 10.1897 4.045C10.9892 4.00975 11.2434 4 13.2812 4ZM13.2812 7.75C12.2867 7.75 11.3328 8.14509 10.6296 8.84835C9.92634 9.55161 9.53125 10.5054 9.53125 11.5C9.53125 12.4946 9.92634 13.4484 10.6296 14.1517C11.3328 14.8549 12.2867 15.25 13.2812 15.25C14.2758 15.25 15.2297 14.8549 15.933 14.1517C16.6362 13.4484 17.0312 12.4946 17.0312 11.5C17.0312 10.5054 16.6362 9.55161 15.933 8.84835C15.2297 8.14509 14.2758 7.75 13.2812 7.75ZM18.1562 7.5625C18.1562 7.31386 18.0575 7.0754 17.8817 6.89959C17.7059 6.72377 17.4674 6.625 17.2188 6.625C16.9701 6.625 16.7317 6.72377 16.5559 6.89959C16.3801 7.0754 16.2812 7.31386 16.2812 7.5625C16.2812 7.81114 16.3801 8.0496 16.5559 8.22541C16.7317 8.40123 16.9701 8.5 17.2188 8.5C17.4674 8.5 17.7059 8.40123 17.8817 8.22541C18.0575 8.0496 18.1562 7.81114 18.1562 7.5625ZM13.2812 9.25C13.878 9.25 14.4502 9.48705 14.8722 9.90901C15.2941 10.331 15.5312 10.9033 15.5312 11.5C15.5312 12.0967 15.2941 12.669 14.8722 13.091C14.4502 13.5129 13.878 13.75 13.2812 13.75C12.6845 13.75 12.1123 13.5129 11.6903 13.091C11.2684 12.669 11.0312 12.0967 11.0312 11.5C11.0312 10.9033 11.2684 10.331 11.6903 9.90901C12.1123 9.48705 12.6845 9.25 13.2812 9.25Z" fill="#B6B9CE"/>
</svg>

                </Link>
              </li>
              <li>
                <Link href={"https://twitter.com/uifryy"}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.4025 7.24219C19.83 7.49546 19.2228 7.66179 18.601 7.73569C19.2563 7.34376 19.7468 6.72695 19.981 6.00019C19.366 6.36619 18.6918 6.62269 17.989 6.76144C17.517 6.25637 16.8913 5.92141 16.2093 5.80863C15.5272 5.69584 14.827 5.81156 14.2175 6.13778C13.608 6.464 13.1233 6.98245 12.8389 7.61253C12.5544 8.24262 12.4861 8.94902 12.6445 9.62194C11.3974 9.55943 10.1772 9.23533 9.06345 8.67069C7.94967 8.10604 6.96708 7.31347 6.17948 6.34444C5.9007 6.82328 5.7542 7.36761 5.75498 7.92169C5.75498 9.00919 6.30848 9.96994 7.14998 10.5324C6.65199 10.5168 6.16496 10.3823 5.72948 10.1402V10.1792C5.72963 10.9035 5.98026 11.6054 6.43887 12.166C6.89748 12.7266 7.53585 13.1113 8.24573 13.2549C7.78345 13.3802 7.29871 13.3987 6.82823 13.3089C7.02838 13.9324 7.41849 14.4776 7.94393 14.8683C8.46937 15.259 9.10383 15.4755 9.75848 15.4877C9.10784 15.9987 8.36287 16.3764 7.56614 16.5993C6.76942 16.8222 5.93658 16.8859 5.11523 16.7867C6.54901 17.7088 8.21806 18.1983 9.92273 18.1967C15.6925 18.1967 18.8478 13.4169 18.8478 9.27169C18.8478 9.13669 18.844 9.00019 18.838 8.86669C19.4522 8.42281 19.9822 7.87295 20.4033 7.24294L20.4025 7.24219Z" fill="#B6B9CE"/>
</svg>

                </Link>
              </li>
              <li>
                <Link href={"https://www.facebook.com/uifryy"}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0312 12.625H15.9062L16.6562 9.625H14.0312V8.125C14.0312 7.3525 14.0312 6.625 15.5312 6.625H16.6562V4.105C16.4118 4.07275 15.4884 4 14.5134 4C12.4772 4 11.0312 5.24275 11.0312 7.525V9.625H8.78125V12.625H11.0312V19H14.0312V12.625Z" fill="#B6B9CE"/>
</svg>

                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
