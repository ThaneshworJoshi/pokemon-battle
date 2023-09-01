export interface BattleCardProps {
  name: string
  type: string
  hp: number
  isWinner?: boolean
  isLooser?: boolean
  moves: string[]
  media: {
    imageUrl: string
    altText: string
  }
}
