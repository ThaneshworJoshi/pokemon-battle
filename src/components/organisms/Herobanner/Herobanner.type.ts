export interface HerobannerProps {
  caption: string
  title: string
  description: string
  ctaButton?: {
    title: string
    link?: string
    target?: string
    tooltip?: string
    onClick?: () => void
  }
  media: {
    imageUrl: string
    altText: string
  }
}
