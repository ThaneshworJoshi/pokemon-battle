import React, { FC } from 'react'
import { BattleHistoryItemProps } from './BattleHistoryItem.type'
import './BattleHistoryItem.scss'

export const BattleHistoryItem: FC<BattleHistoryItemProps> = ({
  battleDate,
  battleTime,
  winner,
  pokemons,
}) => {
  return (
    <div className="battle-history-item">
      <div className="battle-history-item__column battle-history-item__column--date">
        <span className="battle-history-item__index">1</span>
        <div className="battle-history-item__datetime">
          <span className="battle-history-item__datetime-title">Date</span>
          <span className="battle-history-item__value">{battleDate}</span>
        </div>
        <div className="battle-history-item__datetime">
          <span className="battle-history-item__datetime-title">Time</span>
          <span className="battle-history-item__value">{battleTime}</span>
        </div>
      </div>
      <div className="battle-history-item__column battle-history-item__column--pokemon">
        <img
          src={pokemons?.[0].imageUrl}
          alt={pokemons?.[0].imageUrl}
          className="battle-history-item__image battle-history-item__image--left"
        />
        <p className="battle-history-item__value">{pokemons?.[0]?.name}</p>
        <img src="./assets/vs.png" className="battle-history-item__vs" />
        <p className="battle-history-item__value">{pokemons?.[1]?.name}</p>
        <img
          src={pokemons?.[1].imageUrl}
          alt={pokemons?.[1].imageUrl}
          className="battle-history-item__image battle-history-item__image--right"
        />
      </div>
      <div className="battle-history-item__column battle-history-item__column--winner">
        <p className="battle-history-item__value">Winner</p>
        <p className="battle-history-item__winner-trophy">
          <img src={'./assets/trophy.png'} />
        </p>
        <img
          src={winner?.imageUrl}
          alt={winner?.name}
          className="battle-history-item__image"
        />
      </div>
    </div>
  )
}

export default BattleHistoryItem
