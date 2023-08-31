import React, { type FC } from 'react'
import { type HerobannerProps } from './Herobanner.type'
import { Button } from 'components'
import './Herobanner.scss'

export const Herobanner: FC<HerobannerProps> = ({
  caption,
  title,
  description,
  ctaButton,
  media
}) => {
  return (
    <div className="hero-banner">
      <div className="hero-banner__cta-section">
        <div className="hero-banner__content">
          <p className="hero-banner__caption">{caption}</p>
          <h1 className="hero-banner__title">{title}</h1>
          <p className="hero-banner__description">{description}</p>
          <Button size="small" onClick={ctaButton?.onClick}>
            {ctaButton?.title}
          </Button>
        </div>
      </div>
      <div className="hero-banner__media-section">
        <img
          src={media?.imageUrl}
          alt={media?.altText}
          className="hero-banner__hero-image"
        />
      </div>
    </div>
  )
}

export default Herobanner
