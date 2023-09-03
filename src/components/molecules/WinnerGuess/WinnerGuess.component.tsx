import React, { FC, useState } from 'react'
import { WinnerGuessProps } from './WinnerGuess.type'
import { Modal } from '../Modal'
import { Button } from 'components/atoms'
import './WinnerGuess.scss'

export const WinnerGuess: FC<WinnerGuessProps> = ({
  pokemons,
  guessWinnerHandler,
}) => {
  const { leftPokemon, rightPokemon } = pokemons

  return (
    <div className="guess-winner">
      <h3 className="guess-winner__title">Guess the Winner</h3>
      <div className="guess-winner__columns">
        {/* Left Column */}
        <div className="guess-winner__column">
          <h3 className="guess-winner__sub-title"> {leftPokemon}</h3>
          <Button size="small" onClick={() => guessWinnerHandler(leftPokemon)}>
            Will Win
          </Button>
        </div>

        {/* Right Column */}
        <div className="guess-winner__column">
          <h3 className="guess-winner__sub-title">{rightPokemon}</h3>
          <Button size="small" onClick={() => guessWinnerHandler(rightPokemon)}>
            Will Win
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WinnerGuess
