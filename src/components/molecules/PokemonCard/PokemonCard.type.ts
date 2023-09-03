export interface PokemonCardProps {
  id?: number
  name: string
  type: string
  url?: string
  media: {
    imageUrl: string
    altText: string
  }
}
