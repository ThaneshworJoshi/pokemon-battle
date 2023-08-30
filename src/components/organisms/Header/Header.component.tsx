import React, { FC } from "react";
import { HeaderProps } from "./Header.type";
import { Logo, NavItems } from "../../molecules";
import "./Header.scss";

export const Header: FC<HeaderProps> = ({ navData, logoData }) => {
  return (
    <header className="header">
      <Logo {...logoData} />
      <NavItems {...navData} />
    </header>
  );
};

export default Header;
