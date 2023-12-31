import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import star from "../../public/assets/icons/star.svg";
import Button from "../Button/Button";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

interface RoadmapStickerProps {
  src: StaticImageData;
  children: ReactNode;
  classes?: string;
}
const RoadmapSticker: FC<RoadmapStickerProps> = ({
  src,
  children,
  classes = "",
}) => {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div
      className={`bg-primary flex justify-between 2xl:flex-col lg:flex-row  md:flex-col rounded-[2.4rem] py-[1.6rem] px-[3.4rem] gap-[1rem] items-center ${classes}`}
    >
      <div className="flex gap-[1.6rem] sm:flex-col items-center">
        <Image src={src} alt="" />
        {children}
      </div>
      {/*  */}
      {user ? (
        <></>
      ) : (
        <Button
          onClick={() => {
            if (window) {
              window.location.href = "/signup";
            }
          }}
          classes={"bg-gradient rounded-[5rem] px-[2.5rem] py-[1.4rem]"}
        >
          <div className="flex gap-[.8rem]">
            <Image src={star} className="" alt="" />
            <span className="text-[#ffffff] font-[500] text-[1.6rem] flex  satoshi">
              Join Pro at 50% Off
            </span>
          </div>
        </Button>
      )}
    </div>
  );
};

export default RoadmapSticker;
