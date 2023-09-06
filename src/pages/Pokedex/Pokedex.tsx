import React, { useState } from 'react'
import { PokemonCard } from 'components/molecules'
import { useFetchPokemons } from 'hooks/api/useFetchPokemon'
import './Pokedex.scss'
import { Button } from 'components/atoms'

export const Pokedex = () => {
  const [offSet, setOffSet] = useState(10)
  const [searchByName, setSearchByName] = useState('')
  const { status, data, isLoading, isError } = useFetchPokemons({
    offset: offSet,
    limit: 10,
  })

  const handleLoadPokemon = (offset: number) => {
    const nextOffSet = offSet + offset
    if (nextOffSet > 0) {
      setOffSet(nextOffSet)
    }
  }
  return (
    <div className="pokedex">
      <div className="pokedex__title">
        Pokedex{' '}
        <span>({!isLoading ? data?.count ?? 0 : 'Loading'} pokemons)</span>
      </div>

      <div></div>

      <hr />

      <div className="pokedex__list">
        {Array.isArray(data?.results) &&
          data?.results.map((item: any, index: number) => (
            <PokemonCard key={item?.name} id={index + 1} {...item} />
          ))}
      </div>
      <div className="pokedex__btn">
        {offSet > 10 && (
          <Button onClick={() => handleLoadPokemon(-10)}>Previous</Button>
        )}
        <Button onClick={() => handleLoadPokemon(10)}>Next</Button>
      </div>
    </div>
  )
}

export default Pokedex
