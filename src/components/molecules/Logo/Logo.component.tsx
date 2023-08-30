import React, { FC } from "react";
import { LogoProps } from "./Logo.type";
import { Link } from "react-router-dom";
import "./Logo.scss";

export const Logo: FC<LogoProps> = ({ media, link }) => {
  return (
    <div className="logo">
      <Link to={link || "/"} className="logo-link">
        <img
          src={media.imageUrl}
          alt={media?.altText || "Logo"}
          className="logo-image"
        />
      </Link>
    </div>
  );
};

export default Logo;
