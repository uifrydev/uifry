import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import star from "../../public/assets/icons/star.svg";
import Button from "../Button/Button";

interface RoadmapStickerProps {
  src: StaticImageData;
  children: ReactNode;
  classes?:string;
}
const RoadmapSticker: FC<RoadmapStickerProps> = ({ src, children ,classes=''}) => {
  return (
    <div className={`bg-primary flex rounded-[2.4rem] py-[1.6rem] px-[3.4rem] gap-[2.6rem] items-center ${classes}`}>
      <Image src={src} alt="" />
      {children}
      <Button classes={"bg-gradient rounded-[5rem] px-[2.5rem] py-[1.4rem] !ml-auto"}>
        <div className="flex gap-[.8rem]">
          <Image src={star} className="" alt="" />
          <span className="text-[#ffffff] font-[500] text-[1.6rem] flex  satoshi">
            Join Pro at 50% Off
          </span>
        </div>
      </Button>
    </div>
  );
};

export default RoadmapSticker;
