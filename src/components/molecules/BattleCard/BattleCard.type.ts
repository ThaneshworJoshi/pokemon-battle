export interface BattleCardProps {
  name?: string
  type?: string
  hp?: number
  attack?: number
  defence?: number
  speed?: number
  isWinner?: boolean
  isLooser?: boolean
  moves?: string[]
  media?: {
    imageUrl: string
    altText: string
  }
}
