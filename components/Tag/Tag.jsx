import React from "react";

const Tag = ({ text ,classess}) => {
  return (
    <span className={`rounded-full border-[1px] border-[#E5E9FF] font-500 text-[1.6rem] leading-[2.2rem] text-primaryBlack px-[2rem] py-[.5rem] ${classess}`}>
      {text}
    </span>
  );
};

export default Tag;
