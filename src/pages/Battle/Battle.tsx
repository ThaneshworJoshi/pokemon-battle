import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { BattleCard, BattleHistoryItemProps } from 'components/molecules'
import './Battle.scss'
import { Button, Select } from 'components/atoms'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { useFetchPokemons } from 'hooks/api/useFetchPokemon'
import { useFetchPokemonByName } from 'hooks/api/useFetchPokemonByName'
import {
  addBattleHistory,
  addLeftOpponent,
  addRightOpponent,
  clearOpponents,
  updateWinner,
} from 'redux/features/pokemonSlice'
import { showToast } from 'utils/toastUtils'
import { simulateBattle } from 'utils/simulateBattle'
import { getRandomId } from 'utils/helper'
import { getCurrentDate, getCurrentTime } from 'utils/datetime'
import { saveDataToLocalStorage } from 'utils/localStorageUtils'
import { debounce } from 'utils/debounce'

export const Battle = () => {
  const dispatch = useAppDispatch()
  const [pokemons, setPokemons] = useState([])
  const [leftPokemon, setLeftPokemon] = useState('')
  const [rightPokemon, setRightPokemon] = useState('')
  const [startBattle, setStartBattle] = useState(false)
  const [currentPokemonInfo, setCurrentPokemonInfo] = useState({
    name: '',
    position: '',
  })

  const { status, data, isLoading, isError } = useFetchPokemons()

  const {
    status: pokemonStatus,
    data: pokemonData,
    isError: pokemonError,
  } = useFetchPokemonByName(currentPokemonInfo?.name)

  const { leftOpponent, rightOpponent } = useAppSelector(
    (state) => state?.pokemon
  )

  // Function to update currentPokemonInfo based on the type (left/right) and pokemon name
  const updatePokemonInfo = useCallback((type: string, name: string) => {
    if (type === 'left') {
      setCurrentPokemonInfo({ name: name, position: 'left' })
    } else {
      setCurrentPokemonInfo({ name: name, position: 'right' })
    }
  }, [])

  // Create a debounced version of the updatePokemonInfo function
  const debouncedSearch = useMemo(() => {
    return debounce(updatePokemonInfo, 500)
  }, [currentPokemonInfo])

  // Handler for left Pokemon change
  const onLeftPokemonChange = (pokemon: string) => {
    setLeftPokemon(pokemon)
  }

  // Handler for right Pokemon change
  const onRightPokemonChange = (pokemon: string) => {
    setRightPokemon(pokemon)
  }

  // Handler for starting or resetting the battle
  const handleBattleStart = () => {
    if (startBattle) {
      setStartBattle(false)
      setLeftPokemon('')
      setRightPokemon('')
      dispatch(updateWinner({}))
      return
    }
    if (!leftOpponent?.name || !rightOpponent?.name) {
      showToast('Please Select Pokemon', 'error')
      return
    }
    setStartBattle(true)

    //@ts-ignore
    const { winner, loser } = simulateBattle(leftOpponent, rightOpponent)

    const battleInfo: BattleHistoryItemProps = {
      id: getRandomId(),
      battleDate: getCurrentDate(),
      battleTime: getCurrentTime(),
      winner: { name: winner.name, imageUrl: winner.media?.imageUrl },
      pokemons: [
        { name: winner.name, imageUrl: winner?.media?.imageUrl },
        { name: loser.name, imageUrl: loser?.media?.imageUrl },
      ],
    }
    // Save battle info to local storage
    saveDataToLocalStorage(battleInfo)
    // Dispatch the winner and battle history
    dispatch(updateWinner({ name: winner?.name, isWinner: true }))
    dispatch(addBattleHistory(battleInfo))
  }

  // Clear opponents from Redux store when unmounting the component
  useEffect(() => {
    return () => {
      dispatch(clearOpponents())
    }
  }, [])

  // Update the list of available pokemons and selected opponent based on API data and selected position
  useEffect(() => {
    if (status === 'success') {
      const pokemons = data?.results?.map((pokemon: any) => pokemon.name)
      setPokemons(pokemons)
    }
    if (pokemonStatus === 'success') {
      if (currentPokemonInfo.position === 'left') {
        dispatch(addLeftOpponent(pokemonData))
      } else {
        dispatch(addRightOpponent(pokemonData))
      }
    }
  }, [status, pokemonStatus])

  // Update currentPokemonInfo for left Pokemon with debounce
  useEffect(() => {
    debouncedSearch('left', leftPokemon)
  }, [leftPokemon])

  // Update currentPokemonInfo for right Pokemon with debounce
  useEffect(() => {
    debouncedSearch('right', rightPokemon)
  }, [rightPokemon])

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
          <Button size="big" onClick={handleBattleStart}>
            {!startBattle ? 'Start Battle' : 'Reset'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Battle
