import React from "react";

const CommingSoonCard = ({ desc, title }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col gap-[2rem] p-[3.2rem] rounded-[1.6rem] bg-[#fff]/[.6] shadow-testimonial">
      <div className="flex justify-between items-center">
        <span className="text-primaryBlack text-[2rem] leading-[2.3rem] font-600">
          {title}
        </span>
        <span className="text-primaryBlack text-[1.4rem] leading-[2.4rem] font-600 py-[1rem] px-[2rem] rounded-full bg-[#E3F6FF]">
          Comming Soon
        </span>
      </div>
      <p className="text-primaryBlack text-[1.4rem] leading-[2.4rem] max-w-[30.7rem]">
        {desc}
      </p>
    </div>
  );
};

export default CommingSoonCard;
