import React, { FC } from "react";
import { LogoProps } from "./Logo.type";
import "./Logo.scss";

export const Logo: FC<LogoProps> = ({ media, link }) => {
  return (
    <div className="logo">
      <a href={link || "/"} className="logo-link">
        <img
          src={media.imageUrl}
          alt={media?.altText || "Logo"}
          className="logo-image"
        />
      </a>
    </div>
  );
};

export default Logo;
