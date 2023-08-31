export interface BattleCardProps {
  name: string
  type: string
  hp: number
  moves: string[]
  media: {
    imageUrl: string
    altText: string
  }
}
