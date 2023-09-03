import React, { FC } from 'react'
import { BattleHistoryItem } from 'components/molecules'
import { BattleHistoryProps } from './BattleHistory.types'
import './BattleHistory.scss'

export const BattleHistory: FC<BattleHistoryProps> = ({
  battleHistoryList,
}) => {
  return (
    <div className="battle-history">
      <div className="battle-history__title">
        Battle History <span>{battleHistoryList.length} battles</span>
      </div>

      <div className="battle-history__list">
        {battleHistoryList?.map((item, index) => (
          <div key={item.id} className="battle-history__list-item">
            <BattleHistoryItem
              {...item}
              key={item?.id}
              id={(index + 1)?.toString()}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BattleHistory
