import React, { useEffect, useState } from 'react'
import { BattleCard } from 'components/molecules'
import './Battle.scss'
import { Button, Select } from 'components/atoms'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { useFetchPokemons } from 'hooks/api/useFetchPokemon'
import { useFetchPokemonByName } from 'hooks/api/useFetchPokemonByName'
import {
  addBattleHistory,
  addLeftOpponent,
  addRightOpponent,
  updateWinner,
} from 'redux/features/pokemonSlice'
import { showToast } from 'utils/toastUtils'
import { simulateBattle } from 'utils/simulateBattle'
import { getRandomId } from 'utils/helper'
import { getCurrentDate, getCurrentTime } from 'utils/datetime'
import { saveDataToLocalStorage } from 'utils/localStorageUtils'

export const Battle = () => {
  const dispatch = useAppDispatch()
  const [pokemons, setPokemons] = useState([])
  const [leftPokemon, setLeftPokemon] = useState('')
  const [startBattle, setStartBattle] = useState(false)
  const [rightPokemon, setRightPokemon] = useState('')
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

  const onLeftPokemonChange = (pokemon: string) => {
    setLeftPokemon(pokemon)
  }

  const onRightPokemonChange = (pokemon: string) => {
    setRightPokemon(pokemon)
  }

  const handleBattleStart = () => {
    if (startBattle) {
      // setBattleResult({})
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
    console.log(winner)
    const battleInfo = {
      id: getRandomId(),
      battleDate: getCurrentDate(),
      battleTime: getCurrentTime(),
      winner: { name: winner.name, imageUrl: winner.media?.imageUrl },
      pokemons: [winner, loser],
    }
    saveDataToLocalStorage(battleInfo)
    dispatch(updateWinner({ name: winner?.name, isWinner: true }))
    dispatch(addBattleHistory(battleInfo))
  }

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

  useEffect(() => {
    setCurrentPokemonInfo({ name: leftPokemon, position: 'left' })
  }, [leftPokemon])

  useEffect(() => {
    setCurrentPokemonInfo({ name: rightPokemon, position: 'right' })
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
