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
  const router = useRouter();
  const pid = router.query;
  const dispatch = useDispatch()
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`w-[194px] transition-all ease-linear duration-500 lg:w-full ${height<800 && "!overflow-y-scroll"} overflow-hidden fixed top-[6.3rem] z-[10] bg-primary pt-[9rem] ${isDetail ? "lg:pt-[14rem]" : "lg:pt-[17rem]"
          }  h-[100vh] ${features.isMenu  ? "lg:max-h-[100vh] !overflow-y-scroll" : "lg:max-h-0"
          }  `}
      >
        {list.map((item, index) => (
          <Link key={index} target={"_blank"} legacyBehavior href={item.link}>
            <div
              // onClick={(e) => e.preventDefault()}
              // onClick={() => setToggle(index)}
              className={`border-r-[1px] border-b-[1px] ${toggle == index || router.pathname.includes(item.link)
                  ? "border-r-[#00B3FF] bg-[#fff]"
                  : "border-[#efe9ff]"
                } py-[1.2rem] px-[2rem] cursor-pointer`}
              onClick={() => dispatch(updateMenu(false))}
            >
              <p
                className={`text-[1.6rem] flex justify-between ${toggle == index || router.pathname.includes(item.link)
                    ? "gradient-text"
                    : "text-primaryBlack"
                  } font-700 leading-[150%] satoshi w-full`}
              >
                {item.title}{" "}

                {/* comment for temporarily */}
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

        <div className="p-[2rem] pb-[2rem] flex-1 a justify-end flex flex-col gap-[1.883rem] pt-[6rem] border-r-[1px] border-b-[1px] border-[#efe9ff]">
          <div className="flex flex-col gap-[.5rem]">
            <div className="flex">

              <Link href={'license-agreement'} className="text-secondaryGray text-[1.2rem] leading-[150%] font-400">
                License, Terms & Policy
              </Link>
            </div>
            <span className="text-secondaryGray text-[1.2rem] leading-[150%] font-400">
              Support
            </span>
          </div>
          <div className="flex gap-[1.732rem] items-center">
            <Image src={linkedin} alt="" />
            <Image src={instagram} alt="" />
            <Image src={twitter} alt="" />
            <Image src={facebook} alt="" />
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
