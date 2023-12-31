"use client"; // this is a client component 👈🏽
import React, { useEffect, useState } from "react";
import arrow from "../../public/assets/icons/arrow-da.svg";
import linkedin from "../../public/assets/icons/linkedin.svg";
import instagram from "../../public/assets/icons/instagram.svg";
import twitter from "../../public/assets/icons/twitter.svg";
import facebook from "../../public/assets/icons/facebook.svg";
import Image from "next/image";
import { list } from "../../utils/links";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { updateMenu } from "../../store/slices/featues";
import { RootState } from "@/store/store";
const Sidebar = ({ isDetail }: { isDetail: boolean }) => {
  const [toggle, setToggle] = useState(-1);
  const features = useSelector((state: RootState) => state.features);
  const { user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const pid = router.query;
  const dispatch = useDispatch();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`w-[194px] flex flex-col scroll transition-all ease-linear duration-500 lg:w-full ${
          height < 800 && "!overflow-y-scroll"
        } overflow-hidden fixed ${
          !user //xs1:top-[6.9rem] xs:top-[8.2rem] to xs1:top-[15rem] xs:top-[15rem]
            ? "top-[6.3rem] xs1:top-[9.2rem] xs:top-[9.2rem] pb-[6.2rem]"
            : "top-0"
        } z-[10] bg-primary pt-[9rem] ${
          isDetail ? "lg:pt-[17rem]" : "lg:pt-[8.4rem]"
        } h-[100svh] ${
          features.isMenu
            ? "lg:max-h-[100vh] !overflow-y-scroll lg:!pt-[17rem]"
            : "lg:max-h-0 lg:!pt-0"
        }  `}
      >
        {list.map((item, index) => (
          <Link key={index} target={"_blank"} legacyBehavior href={item.link}>
            <div
              // onClick={(e) => e.preventDefault()}
              // onClick={() => setToggle(index)}
              className={`border-r-[1px] border-b-[1px] ${
                toggle == index || router.pathname.includes(item.link)
                  ? "border-r-[#00B3FF] bg-[#fff]"
                  : "border-border"
              } py-[1.2rem] px-[2rem] cursor-pointer`}
              onClick={() => dispatch(updateMenu(false))}
            >
              <p
                className={`text-[1.6rem] flex justify-between ${
                  toggle == index || router.pathname.includes(item.link)
                    ? "gradient-text"
                    : "text-primaryBlack"
                } font-700 leading-[150%] satoshi w-full`}
              >
                {item.title} {/* comment for temporarily */}
                {/* {!router.pathname.includes(item.link) && item.list.length ? (
                  <Image src={arrow} alt="" />
                ) : (
                  ""
                )} */}
              </p>

              {/* comment for temporarily */}
              {/* {router.pathname.includes(item.link) && item.list.length ? (
                <></>
              ) : ( */}
              <span
                className={`text-secondaryGray text-[1.2rem]  leading-[150%]`}
              >
                {item.subTitle}
              </span>
              {/* )} */}

              {/* comment for temporarily */}
              {/* {item.list.length ? (
                <ul
                  className={`overflow-hidden flex flex-col pl-[1.6rem] gap-[0.5rem] transition-all ease-linear duration-300  ${
                    toggle == index || router.pathname.includes(item.link)
                      ? "max-h-[19rem]  pt-[1rem]"
                      : "max-h-0"
                  }`}
                >
                  {item.list.map((item1, index1) => (
                    <li
                      key={index + index1}
                      className={`text-[1.6rem] ${
                        item1.link.slice(1) === String(pid?.slug)
                          ? "text-primaryBlack font-[500]"
                          : "text-secondaryGray"
                      }`}
                    >
                      <Link href={item.link + item1.link}>{item1.title}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )} */}
            </div>
          </Link>
        ))}

        <div
          className={`p-[2rem] mt-auto ${
            height < 800 && ""
          } relativer bottom-[4rerm] flex-1 a justify-end flex flex-col gap-[1.883rem] pt-[6rem] border-r-[1px] border-b-[1px] border-border`}
        >
          <div className="flex flex-col gap-[.5rem]">
            <div className="flex">
              <Link
                href={"/license-agreement"}
                className="text-secondaryGray text-[1.2rem] leading-[150%] font-400"
              >
                License, Terms & Policy
              </Link>
            </div>
            <Link
              href={"https://uifry.outseta.com/support/kb/categories"}
              target="_blank"
              className="text-secondaryGray text-[1.2rem] leading-[150%] font-400"
            >
              Support
            </Link>
          </div>
          <div className="flex gap-[1.732rem] items-center">
            <Link href={"https://www.linkedin.com/company/ui-fry/"} target="_blank">
              <Image src={linkedin} alt="" className="w-[1.6rem]" />
            </Link>
            <Link href={"https://www.instagram.com/uifryy/"} target="_blank">
              <Image src={instagram} alt="" className="w-[1.7rem]" />
            </Link>
            <Link href={"https://twitter.com/uifryy"} target="_blank">
              <Image src={twitter} alt="" className="w-[1.9rem]" />
            </Link>
            <Link href={"https://www.facebook.com/uifryy"} target="_blank">
              <Image src={facebook} alt="" className="w-[.9rem]" />
            </Link>
          </div>
          <span className="text-[1rem] font-400 text-[#160042]">
            UIFry LTD® 2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
