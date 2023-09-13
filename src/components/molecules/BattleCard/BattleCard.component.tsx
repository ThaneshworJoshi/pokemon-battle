import React, { type FC } from 'react'
import { type BattleCardProps } from './BattleCard.type'
import './BattleCard.scss'

export const BattleCard: FC<BattleCardProps> = ({
  name,
  type,
  hp,
  moves,
  media,
  isWinner,
  isLoser,
}) => {
  if (!name) {
    return (
      <div className="select-card">
        <img src="./assets/banner.png" alt="" />
      </div>
    )
  }
  return (
    <div className="battle-card">
      {isLoser && <div className="battle-card__loser"></div>}
      {isWinner && (
        <div className="battle-card__winner">
          <img src="./assets/winner.png" alt="winner" />
        </div>
      )}
      <div className="battle-card__media">
        <img src={media?.imageUrl} alt={media?.altText} />
        <div>
          <h3 className="battle-card__name">{name}</h3>
          <p className="battle-card__type">{type}</p>
        </div>
      </div>
      <div className="battle-card__stats">
        <h5 className="battle-card__stats-header">Pokemon stats</h5>
        <div className="battle-card__stat-info">
          <span className="stat-label">HP</span>
          <span className="battle-card__stat-value">{hp}</span>
        </div>

        <div className="battle-card__moves">
          <span className="stat-label">Moves</span>
          <div className="battle-card__moves-list">
            {moves?.map((move, index) => (
              <span key={index}>{move}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BattleCard
