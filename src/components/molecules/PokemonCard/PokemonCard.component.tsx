import React, { FC } from 'react'
import { PokemonCardProps } from './PolemonCard.type'
import './PokemonCard.scss'

export const PokemonCard: FC<PokemonCardProps> = ({ name, media, type }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card__image-wrapper">
        <img src={media?.imageUrl} alt={name} />
      </div>
      <div className="pokemon-card__info">
        <p className="pokemon-card__name">{name}</p>
        <p className="pokemon-card__type">{type}</p>
      </div>
    </div>
  )
}

export default PokemonCard
