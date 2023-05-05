import React from "react";
import { NextPage } from "next";
import { ButtonProps } from "../../Interface/interface";
const Button: NextPage<ButtonProps> = ({
  children,
  classes,
  onClick,
  onBlur,
}) => {
  return (
    <button
      onClick={onClick}
      onBlur={onBlur}
      className={`font-500 text-[1.6rem] py-[1.1rem] px-[2.6rem]  ${classes} `}
      // tabIndex={1}
    >
      {children}
    </button>
  );
};

export default Button;
