import React, { FC } from 'react'
import { PokemonCardProps } from './PokemonCard.type'
import './PokemonCard.scss'

export const PokemonCard: FC<PokemonCardProps> = ({ id, name, type, url }) => {
  const match = url?.match(/\/(\d+)\/$/)

  return (
    <div className="pokemon-card">
      <div className="pokemon-card__image-wrapper">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${match?.[1]}.svg`}
          alt={name}
        />
      </div>
      <div className="pokemon-card__info">
        <p className="pokemon-card__name">{name}</p>
        <p className="pokemon-card__type">{type}</p>
      </div>
    </div>
  )
}

export default PokemonCard
