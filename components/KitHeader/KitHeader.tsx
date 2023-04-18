import React, { useRef, useState } from "react";
import logo from "../../public/assets/images/logobeta.svg";
import home from "../../public/assets/icons/home.svg";
import arrow from "../../public/assets/icons/arrow-fa.svg";
import star from "../../public/assets/icons/star.svg";
import user from "../../public/assets/icons/user.svg";
import menu from "../../public/assets/icons/menu.svg";
import cross from "../../public/assets/icons/cross.svg";
import Image from "next/image";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateMenu, updateProModal } from "../../store/slices/featues";
import userIcon from "../../public/assets/icons/user.svg";
import Link from "next/link";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import setting from "../../public/assets/icons/setting.svg";
import useOutseta from "@/customHooks/useOutseta";
const DetailHeader = ({ link }: { link: string }) => {
  const features = useSelector((state: RootState) => state.features);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isSetting, setSetting] = useState<boolean>();
  const outsetaRef = useRef<any>();
  const { user, token } = useSelector((state: RootState) => state.auth);
  const { logout, openLogin, openProfile, updateUser } = useOutseta();

  return (
    <header
      className={`flex flex-col z-[154] bg-primary  sticky ${
        user ? "top-0" : "top-[6.3rem]"
      } border-b-[1px] w-full border-border`}
    >
      <div className="flex w-full">
        <Link
          href={"/"}
          className="py-[2.237rem] px-[4rem] lg:py-[2rem] lg:pl-[2rem] min-lg:border-r-[1px]  min-lg:border-border"
        >
          <Image src={logo} alt={""} />
        </Link>

        <div
          // href={link || "/"}
          onClick={() => {

            router.back();
            console.log(router.basePath)
          }}
          className="lg:hidden flex-1 flex cursor-pointer items-center gap-[1.447rem] py-[2.9rem] pl-[4.1rem]"
        >
          <div className="">
            <Image src={arrow} alt={""} className="rotate-180" />
          </div>
          <span className="text-[1.6rem] text-[#160042] leading-[150%] font-400 ">
            Back
          </span>
        </div>
        <div className="lg:hidden flex gap-[.963rem] items-center pr-[4rem]">
          {/* <Link
              href={
                "https://uifry.outseta.com/auth?widgetMode=register_or_login#o-anonymous"
              }
            > */}
          {/* <Button
              classes={
                "bg-gradient xl:!bg-[#fff] rounded-[5rem] xl:!p-[1.5rem]"
              }
              onClick={openProfile}
              // onClick={()=>window.open('https://uifry.outseta.com/auth?widgetMode=register#o-anonymous','_blank')}
            >
              <div className="flex gap-[.8rem]">
                <Image src={star} className="" alt="" />
                <span className="text-[#ffffff] font-[500] text-[1.6rem] flex xl:hidden satoshi">
                  Join Pro
                </span>
              </div>
            </Button> */}
          {/* </Link> */}
          {/* <Link
              href={
                "https://uifry.outseta.com/auth?widgetMode=register_or_login&planFamilyUid=wmjrZxmV&planPaymentTerm=month&skipPlanOptions=true#o-anonymous"
              }
            > */}
          {user ? (
            <div className="flex items-center gap-[1rem] py-[.5rem] px-[2rem] border-[1px] border-border rounded-full bg-[#fff] ">
              <span className="text-primaryBlack text-[1.6rem] font-700 leading-[2.4rem]">
                {user?.FullName?.split(" ")[0]}
              </span>
              <div className="px-[1.3rem] flex rounded-full gap-[.438rem] bg-gradient items-center py-[.5rem]">
                <Image src={star} alt="" className="w-[1.2rem]" />
                <span className="text-[1.1rem] font-700 satoshi text-[#fff]">
                  Pro
                </span>
              </div>
              <div className="relative ">
                <Button
                  classes="!px-[.3rem]"
                  onClick={() => setSetting((prev) => !prev)}
                  // onBlur={() => setSetting(false)}
                >
                  <Image alt="" src={setting} />
                </Button>
                {isSetting && (
                  <div
                    // tabIndex={1}
                    className="bg-[#fff] shadow-xl absolute top-[5rem] -left-[6rem] rounded-[.5rem] overflow-hidden"
                  >
                    <ul>
                      <li className="px-[2rem] py-[0.5rem] text-[1.6rem] cursor-pointer text-primaryBlack hover:bg-[#000]/[0.1]">
                        Profile
                      </li>
                      <li
                        onClick={logout}
                        className="px-[2rem] py-[0.5rem] text-[1.6rem] cursor-pointer text-primaryBlack hover:bg-[#000]/[0.1]"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              <Button
                classes={
                  "bg-gradient xl:!bg-[#fff] rounded-[5rem] xl:!p-[1.5rem]"
                }
                onClick={() => {
                  dispatch(updateProModal(true));
                  document.body.classList.add("!overflow-y-hidden");
                }}
                // onClick={()=>window.open('https://uifry.outseta.com/auth?widgetMode=register#o-anonymous','_blank')}
              >
                <div className="flex gap-[.8rem]">
                  <Image src={star} className="" alt="" />
                  <span className="text-[#ffffff] font-[500] text-[1.6rem] flex xl:hidden satoshi">
                    Join Pro
                  </span>
                </div>
              </Button>
              <Button
                classes={
                  "bg-[#0A2540] xl:!bg-[#fff] rounded-[3.2rem]  xl:!p-[1.7rem]"
                }
                onClick={openLogin}
              >
                <span className="text-[#ffffff] font-[500]  text-[1.6rem] xl:hidden leading-[150%] satoshi">
                  Login
                </span>
                <Image src={userIcon} alt="" className="min-xl:hidden" />
              </Button>
            </>
          )}
          {/* </Link> */}
        </div>
        <div
          onClick={() => dispatch(updateMenu(!features.isMenu))}
          className="hidden  lg:flex mr-[3.2rem] ml-auto cursor-pointer"
        >
          <Image src={features.isMenu ? cross : menu} alt={""} />
        </div>
      </div>
      <div className="flex flex-col py-[2rem] gap-[2rem] pl-[2rem] border-t-[1px] w-full min-lg:hidden border-border">
        {features.isMenu ? (
          <div className="mr-auto flex items-center gap-[1rem]">
            <Button
              classes={"bg-gradient rounded-[5rem] !px-[2.2rem] !py-[1rem]"}
            >
              <div className="flex gap-[.8rem]">
                <Image src={star} className="" alt="" />
                <span className="text-[#ffffff] font-[500] text-[1.6rem] flex satoshi">
                  Join Pro
                </span>
              </div>
            </Button>
            <Button
              classes={"bg-[#0A2540]  rounded-[3.2rem] !px-[2.2rem] !py-[1rem]"}
            >
              <span className="text-[#ffffff] font-[500]  text-[1.6rem]  leading-[150%] satoshi">
                Login
              </span>
            </Button>
          </div>
        ) : (
          <>
            <Link
              href={"/ui-ux-kits"}
              className="flex-1 flex items-center gap-[1.447rem] py-[1rem] "
            >
              <div className="">
                <Image src={arrow} alt={""} className="rotate-180" />
              </div>
              <span className="text-[1.6rem] text-[#160042] leading-[150%] font-400 ">
                Back
              </span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default DetailHeader;
