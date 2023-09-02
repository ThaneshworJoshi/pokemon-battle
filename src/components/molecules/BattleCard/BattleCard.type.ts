export interface BattleCardProps {
  name?: string
  type?: string
  hp?: number
  attack?: number
  defence?: number
  speed?: number
  isWinner?: boolean
  isLoser?: boolean
  moves?: string[]
  media?: {
    imageUrl: string
    altText: string
  }
}
