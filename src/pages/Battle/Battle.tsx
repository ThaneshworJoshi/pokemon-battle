import React, { useState } from 'react'
import { BattleCard } from 'components/molecules'
import './Battle.scss'
import { Button, Select } from 'components/atoms'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

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

export const Battle = () => {
  // const dispatch = useAppDispatch()
  const { leftOpponent, rightOpponent } = useAppSelector(
    (state) => state?.pokemon
  )

  const [leftPokemon, setLeftPokemon] = useState('')
  const [rightPokemon, setRightPokemon] = useState('')

  const onLeftPokemonChange = (pokemon: string) => {
    setLeftPokemon(pokemon)
  }

  const onRightPokemonChange = (pokemon: string) => {
    setRightPokemon(pokemon)
  }
  return (
    <div className="container">
      <div className="battle">
        <h3 className="battle__title">Lets the Battle Begin</h3>

        <div className="battle__box">
          <div className="battle__card-wrapper">
            <Select
              options={pokemons}
              value={leftPokemon}
              fullWidth={false}
              label="Choose your first Pokemon"
              onChangeHandler={onLeftPokemonChange}
            />
            <BattleCard {...leftOpponent} />
          </div>
          <div className="battle__vs-img">
            <img src="./assets/vs.png" alt="vs alt" />
          </div>
          <div className="battle__card-wrapper">
            <Select
              options={pokemons}
              value={rightPokemon}
              fullWidth={false}
              label="Choose your second Pokemon"
              onChangeHandler={onRightPokemonChange}
            />

            <BattleCard {...rightOpponent} />
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
