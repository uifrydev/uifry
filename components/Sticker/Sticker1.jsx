import Image from "next/image";
import React from "react";
import image from "../../public/assets/images/sticker.png";
import drop from "../../public/assets/images/drop.png";
import gradient from "../../public/assets/images/gradient.png";
import drop1 from "../../public/assets/images/drop1.png";
import gradient1 from "../../public/assets/images/gradient1.png";
import gradient2 from "../../public/assets/images/gradient2.png";
const Sticker1 = ({ classes = "" }) => {
  return (
    <div
      className={`w-full flex z-[1000000] bg-[#002D6A]  justify-center gap-[2rem] h-[6.3rem] sticky top-0 py-[0rem] overflow-hidden px-[0rem] items-center rounded-full bg-[#] ${classes}`}
    >
      <div className="relative flex h-full justify-center items-center w-full max-w-[170rem]">
        <div className="flex items-center  gap-[2rem] z-[12]">
          <p className="text-[#fff] pl-[5rem] pr-[2rem] font-[700] text-[1.6rem] satoshi">
            Get access to
            <span className="gradie"> 20,000+ resources. </span>
            Join us at 50% off this month!
          </p>
          <span className="py-[5px] lg:hidden flex text-[1.4rem] px-[13px] rounded-full bg-[#fff]/[0.1] border-[1px] text-white border-[#fff]/[0.2]">
            Learn More
          </span>
        </div>
        <div className="">
          <Image
            src={drop}
            className="absolute top-0 flex lg:hidden right-[0%] h-full  z-[1]"
          />
          <Image
            src={gradient}
            className="absolute top-0 right-[5%] lg:hidden h-full object-cover"
          />
          <Image
            src={gradient2}
            className="absolute top-0 lg:hidden left-[0%] h-full object-cover"
          />
          <Image
            src={drop1}
            className="absolute -top-[1rem] left-[0%] lg:-left-[9rem] h-full object-contain z-[1]"
          />
          <Image
            src={gradient1}
            className="absolute top-0  left-[0%] h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Sticker1;
