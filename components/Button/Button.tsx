import React from "react";
import { NextPage } from "next";
import { ButtonProps } from "../../Interface/interface";
const Button: NextPage<ButtonProps> = ({ children, classes, onClick }) => {
  return (
    <button onClick={onClick} className={`font-500 text-[1.6rem] py-[1.1rem] px-[2.6rem]  ${classes} `}>
      {children}
    </button>
  );
};

export default Button;

