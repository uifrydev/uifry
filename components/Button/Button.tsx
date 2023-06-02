import React from "react";
import { NextPage } from "next";
import { ButtonProps } from "../../Interface/interface";
const Button: NextPage<ButtonProps &{disable?:boolean}> = ({
  children,
  classes,
  onClick,
  onBlur,
  disable
}) => {
  return (
    <button type="submit" disabled={false || disable}
      onClick={onClick}
      onBlur={onBlur}
      className={`font-500 text-[1.6rem] py-[1.1rem] px-[2.6rem] box-border ${classes} `}
      // tabIndex={1}
    >
      {children}
    </button>
  );
};

export default Button;
