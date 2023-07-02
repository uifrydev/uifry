import React from "react";

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
    <div className="shadow-testimonial rounded-[1rem] bg-[#ffffff]/[.7] p-[2rem] flex flex-col gap-[1.8rem]">
      <div className="flex flex-col ">
        <p className="text-[1.7rem] font-600 leading-[2.34rem] text-secondaryBlack">
          {name}
        </p>
        <span className="text-secondaryBlack/[.6] text-[1.3rem] leading-[1.82rem]">
          {designation}
        </span>
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
        <span className="text-[1.2rem] leading-[2.1rem] mt-[.8rem]">{date}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
