import React, { FC } from 'react'
import { BattleHistoryItemProps } from './BattleHistoryItem.type'
import './BattleHistoryItem.scss'

export const BattleHistoryItem: FC<BattleHistoryItemProps> = ({
  id,
  battleDate,
  battleTime,
  winner,
  pokemons,
  userGuess,
}) => {
  return (
    <div className="battle-history-item">
      <div className="battle-history-item__column battle-history-item__column--date">
        <span className="battle-history-item__index">{id}</span>
        <div className="battle-history-item__datetime">
          <span className="battle-history-item__datetime-title">Date</span>
          <span className="battle-history-item__value">{battleDate}</span>
        </div>
        <div className="battle-history-item__datetime battle-history-item__time">
          <span className="battle-history-item__datetime-title">Time</span>
          <span className="battle-history-item__value">{battleTime}</span>
        </div>
      </div>
      <div className="battle-history-item__column battle-history-item__column--pokemon">
        <img
          src={pokemons?.[0].imageUrl}
          alt={pokemons?.[0].imageUrl}
          className={`battle-history-item__image battle-history-item__image--left ${
            userGuess === pokemons?.[0]?.name ? 'user-guess__img' : ''
          }`}
          title={pokemons?.[0]?.name}
        />
        {winner?.name === pokemons?.[0]?.name && (
          <img src={'./assets/trophy.png'} className="winner-img" />
        )}
        <p
          className={`battle-history-item__value battle-history-item__name ${
            userGuess === pokemons?.[0]?.name && 'user-guess'
          }`}
        >
          {pokemons?.[0]?.name}
        </p>
        <img src="./assets/vs.png" className="battle-history-item__vs" />
        <p
          className={`battle-history-item__value battle-history-item__name ${
            userGuess === pokemons?.[1]?.name && 'user-guess'
          }`}
        >
          {pokemons?.[1]?.name}
        </p>
        <img
          src={pokemons?.[1].imageUrl}
          alt={pokemons?.[1].imageUrl}
          className={`battle-history-item__image battle-history-item__image--right ${
            userGuess === pokemons?.[1]?.name ? 'user-guess__img' : ''
          }`}
          title={pokemons?.[1]?.name}
        />
        {winner?.name === pokemons?.[1]?.name && (
          <img src={'./assets/trophy.png'} className="winner-img" />
        )}
      </div>
      <div className="battle-history-item__column battle-history-item__column--winner">
        <p className="battle-history-item__value battle-history-item__name">
          Winner
        </p>
        <p className="battle-history-item__winner-trophy">
          <img src={'./assets/trophy.png'} />
        </p>
        <img
          src={winner?.imageUrl}
          alt={winner?.name}
          className="battle-history-item__image"
          title={winner?.name}
        />
      </div>
    </div>
  )
}

export default BattleHistoryItem
