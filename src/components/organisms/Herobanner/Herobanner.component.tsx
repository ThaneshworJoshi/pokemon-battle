import React, { FC } from "react";
import { HerobannerProps } from "./Herobanner.type";
import "./Herobanner.scss";
import { Button } from "components";

export const Herobanner: FC<HerobannerProps> = ({
  caption,
  title,
  description,
  ctaButton,
  media,
}) => {
  return (
    <div className="hero-banner">
      <div className="cta-section">
        <div className="content">
          <p className="caption">{caption}</p>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          <Button size="small" onClick={ctaButton?.onClick}>
            {ctaButton?.title}
          </Button>
        </div>
      </div>
      <div className="media-section">
        <img
          src={media?.imageUrl}
          alt={media?.altText}
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Herobanner;
