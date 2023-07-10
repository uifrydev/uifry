import React from "react";
import greenCheck from "../../public/assets/images/green-check.png";
import Image from "next/image";
const TestimonialCard = ({
  name,
  date,
  designation,
  review,
}: {
  name: string;
  designation: string;
  review: string[];
  date: string;
}) => {
  return (
    //shadow-testimonial
    <div className="rounded-[1rem] bg-[#ffffff]/[.7] p-[2rem] max-w-[50rem] w-full border-[1px]">
      <div className="flex flex-col gap-[1.8rem]">
        <div className="">
          <div className="flex w-full items-center justify-between gap-[1rem]">
            <p className="text-[1.7rem] font-600 leading-[2.34rem] text-secondaryBlack">
              {name}
            </p>
            <Image src={greenCheck} alt="" />
          </div>
          <span className="text-secondaryBlack/[.6] text-[1.3rem] leading-[1.82rem]">
            {designation}
          </span>
        </div>
        <div className="flex flex-col gap-[3rem]">
          {review.map((review) => (
            <p
              className="text-secondaryBlack text-[1.5rem] leading-[2.4rem]"
              key={review}
            >
              {review}
            </p>
          ))}
        </div>
        <span className="text-[1.2rem] leading-[2.1rem] mt-[.8rem] text-secondaryBlack/[.6]">
          {date}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
