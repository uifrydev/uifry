import Image from "next/image";
import React from "react";
import drop from "../../public/assets/images/drop.png";
import gradient from "../../public/assets/images/gradient.png";
import drop1 from "../../public/assets/images/drop1.png";
import gradient1 from "../../public/assets/images/gradient1.png";
const Sticker = ({ classes = "" }: { classes: string }) => {
  return (
    <div
      className={`w-full relative  flex z-[11] justify-center gap-[2rem] py-[1.5rem] overflow-hidden px-[2rem] items-center rounded-full bg-[#002D6A] ${classes}`}
    >
      <p className="text-[#fff] font-[700] text-[1.6rem] satoshi">
        We Added <span className="gradient-text"> 150 new UI templates </span>
        this week!
      </p>
      <span className="py-[5px] text-[1.4rem] px-[13px] rounded-full bg-[#fff]/[0.1] border-[1px] text-white border-[#fff]/[0.2]">
        Thanks
      </span>
      <Image
        src={drop}
        className="absolute top-0 right-0 h-full object-cover z-[1]"
        alt=""
      />
      <Image
        src={gradient}
        className="absolute top-0 right-0 h-full object-cover"
        alt=""
      />
      <Image
        src={drop1}
        className="absolute top-0 left-0 h-full object-cover z-[1]"
        alt=""
      />
      <Image
        src={gradient1}
        className="absolute top-0 left-0 h-full object-cover"
        alt=""
      />
    </div>
  );
};

export default Sticker;
