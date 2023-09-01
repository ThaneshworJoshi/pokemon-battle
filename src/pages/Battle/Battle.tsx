import React from 'react'
import { BattleCard } from 'components/molecules'
import './Battle.scss'
import { Button, Select } from 'components/atoms'

const pokemons = [
  'Bulbasaur',
  'Charmander',
  'Squirtle',
  'Pikachu',
  'Eevee',
  'Jigglypuff',
  'Snorlax',
  'Mewtwo',
  'Gengar',
  'Dragonite',
]

const mockPokemon1 = {
  name: 'Blastoise',
  type: 'Water',
  hp: 267,
  moves: ['Flash Cannon', 'Hyper Beam', 'Aqua Ring', 'Hydro Canon'],
  media: {
    imageUrl: './assets/pok1.png',
    altText: 'alt-text',
  },
  isLooser: true,
}

const mockPokemon2 = {
  name: 'Bulbasour',
  type: 'Grass',
  hp: 345,
  moves: ['Razor Leaf', 'Seed Bomb', 'Solar Beam', 'Rock Smash'],
  media: {
    imageUrl: './assets/pok2.png',
    altText: 'alt-text',
  },
  isWinner: true,
}
export const Battle = () => {
  return (
    <div className="container">
      <div className="battle">
        <h3 className="battle__title">Lets the Battle Begin</h3>

        <div className="battle__box">
          <div className="battle__card-wrapper">
            <Select
              items={pokemons}
              fullWidth={false}
              label="Choose your second Pokemon"
            />
            <BattleCard {...mockPokemon1} />
          </div>
          <div className="battle__vs-img">
            <img src="./assets/vs.png" alt="vs alt" />
          </div>
          <div className="battle__card-wrapper">
            <Select
              items={pokemons}
              fullWidth={false}
              label="Choose your second Pokemon"
            />

            <BattleCard {...mockPokemon2} />
          </div>
        </div>
        <div className="battle__cta">
          <Button size="big">Start Battle</Button>
        </div>
      </div>
    </div>
  )
}

export default Battle
