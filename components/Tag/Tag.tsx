import React from "react";

const Tag = ({ text ,classess}:{text:string ,classess:string}) => {
  return (
    <span className={`rounded-full border-[1px] border-border2 font-500 text-[1.6rem] leading-[2.2rem] text-primaryBlack px-[2rem] py-[.5rem] ${classess}`}>
      {text}
    </span>
  );
};

export default Tag;
