import React, { useEffect } from 'react'
import {} from 'components/molecules'
import './History.scss'
import { BattleHistory, BattleHistoryItemProps } from 'components'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { loadBattleHistory } from 'redux/features/pokemonSlice'
import { getDataFromLocalStorage } from 'utils/localStorageUtils'

export const History = () => {
  const dispatch = useAppDispatch()
  const battleHistory = useAppSelector((state) => state?.pokemon?.battleHistory)

  useEffect(() => {
    // Load battleHistory data from localStorage
    const storedHistory = getDataFromLocalStorage('history')

    if (storedHistory) {
      // Dispatch the loaded history to the store
      dispatch(loadBattleHistory(storedHistory))
    }
  }, [dispatch])

  return (
    <div className="battle-history">
      <BattleHistory battleHistoryList={battleHistory} />
    </div>
  )
}

export default History
