import React, { FC } from "react";
import { ButtonProps } from "./Button.type";
import "./Button.scss";

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = "medium",
}) => {
  return (
    <button onClick={onClick} className={`button ${size}`}>
      {children}
    </button>
  );
};

export default Button;
