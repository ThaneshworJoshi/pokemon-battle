import React from 'react'
import { HerobannerProps } from './Herobanner.type'
import HeroBanner from './Herobanner.component'
import { render, screen, fireEvent } from '@testing-library/react'

describe('HeroBanner Component', () => {
  const heroBannerData = {
    caption: 'Welcom to',
    title: 'Battle Pokemon',
    description: 'Battle Pokemon is a fun...',
    ctaButton: {
      title: 'Learn More',
      onClick: jest.fn()
    },
    media: {
      imageUrl: './assets/banner.png',
      altText: 'Hero Image'
    }
  }

  it('renders with correct content', () => {
    render(<HeroBanner {...heroBannerData} />)

    expect(screen.getByText('Welcom to')).toBeInTheDocument()
    expect(screen.getByText('Battle Pokemon')).toBeInTheDocument()
    expect(screen.getByText('Battle Pokemon is a fun...')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
    expect(screen.getByAltText('Hero Image')).toBeInTheDocument()
  })

  it('calls onClick when CTA button is clicked', () => {
    render(<HeroBanner {...heroBannerData} />)

    const ctaButton = screen.getByText('Learn More')
    fireEvent.click(ctaButton)

    expect(heroBannerData.ctaButton.onClick).toHaveBeenCalledTimes(1)
  })
})
