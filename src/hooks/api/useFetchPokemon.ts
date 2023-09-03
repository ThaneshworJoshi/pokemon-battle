import { externalApiEndpoints as ep } from "common/constant";
import { useQuery } from "react-query";
import http from "utils/http";
import { stringifySearchParams } from '../../utils/searchParams'

const fetchPokemons = (searchParams: any) => {
    const queryParams = stringifySearchParams(searchParams)
    const endpoint = ep.baseUrl + ep.pokemon.base + '?' + queryParams
    return http().get(endpoint)
}

export function useFetchPokemons(searchParams?: any) {
    return useQuery(['fetchPokemon', searchParams], () => fetchPokemons(searchParams), {
        enabled: true
    })
}