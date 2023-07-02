import React from "react";
import verfied from "../../public/assets/images/verified.png";
import Image from "next/image";
const TestimonialCard1 = ({
  desc,
  designation,
  name,
}: {
  desc: string;
  name: string;
  designation: string;
}) => {
  return (
    <div className="p-[2.4rem] w-full rounded-[.8rem] bg-[#fff] flex flex-col gap-[1.6rem]">
      <p className="max-w-[31.834rem] lg:max-w-full text-secondaryBlack text-[1.4rem] leading-[2.4rem]">{desc}</p>
      <div className="flex gap-[1.6rem] middle mr-auto">
        <div className="p-[1.2rem] rounded-full aspect-[1/1] bg-[#E8F2FF] ">
          <Image src={verfied} alt="verified" />
        </div>
        <div className="flex flex-col">
          <span className="text-[1.3rem] leading-[2.1rem] text-secondaryBlack">
            {name}
          </span>
          <span className="text-[1.3rem] leading-[2.1rem] text-secondaryBlack/[.6rem]">
            {designation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard1;
