import React from "react";
import logo from "../../public/assets/images/logo.png";
import home from "../../public/assets/icons/home.svg";
import arrow from "../../public/assets/icons/arrow-fa.svg";
import star from "../../public/assets/icons/star.svg";
import user from "../../public/assets/icons/user.svg";
import menu from "../../public/assets/icons/menu.svg";
import cross from "../../public/assets/icons/cross.svg";
import Image from "next/image";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateMenu } from "../../store/slices/featues";
import Link from "next/link";
const DetailHeader = ({ link }: { link: string }) => {
  const features = useSelector((state) => state.features);
  const dispatch = useDispatch();
  return (
    <header className="flex flex-col z-[154] bg-primary  sticky top-[6.3rem] border-b-[1px] w-full border-[#efe9ff]">
      <div className="flex w-full">
        <Link
          href={"/"}
          className="py-[2.237rem] px-[4rem] lg:py-[2rem] lg:pl-[2rem] min-lg:border-r-[1px]  min-lg:border-[#efe9ff]"
        >
          <Image src={logo} alt={""} />
        </Link>

        <Link
          href={link || "/"}
          className="lg:hidden flex-1 flex items-center gap-[1.447rem] py-[2.9rem] pl-[4.1rem]"
        >
          <div className="">
            <Image src={arrow} alt={""} className="rotate-180" />
          </div>
          <span className="text-[1.6rem] text-[#160042] leading-[150%] font-400 ">
            Back
          </span>
        </Link>
        <div className="lg:hidden flex gap-[.963rem] items-center pr-[4rem]">
          <Button
            classes={"bg-gradient xl:!bg-[#fff] rounded-[5rem] xl:!p-[1.5rem]"}
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
          >
            <span className="text-[#ffffff] font-[500]  text-[1.6rem] xl:hidden leading-[150%] satoshi">
              Login
            </span>
            <Image src={user} alt="" className="min-xl:hidden" />
          </Button>
        </div>
        <div
          onClick={() => dispatch(updateMenu(!features.isMenu))}
          className="hidden  lg:flex mr-[3.2rem] ml-auto cursor-pointer"
        >
          <Image src={features.isMenu ? cross : menu} alt={""} />
        </div>
      </div>
      <div className="flex flex-col py-[2rem] gap-[2rem] pl-[2rem] border-t-[1px] w-full min-lg:hidden border-[#efe9ff]">
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
              className="flex-1 flex items-center gap-[1.447rem]  "
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
