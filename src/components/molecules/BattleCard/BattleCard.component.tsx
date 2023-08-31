import React, { FC } from "react";
import { BattleCardProps } from "./BattleCard.type";
import "./BattleCard.scss";

export const BattleCard: FC<BattleCardProps> = ({
  name,
  type,
  hp,
  moves,
  media,
}) => {
  return (
    <div className="battle-card">
      <div className="battle-card__media">
        <img src={media?.imageUrl} alt={media?.altText} />
        <h3 className="battle-card__name">{name}</h3>
        <p className="battle-card__type">{type}</p>
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
            {moves.map((move, index) => (
              <span key={index}>{move}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleCard;
