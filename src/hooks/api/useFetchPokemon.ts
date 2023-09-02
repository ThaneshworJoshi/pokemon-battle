import { externalApiEndpoints as ep } from "common/constant";
import { useQuery } from "react-query";
import http from "utils/http";

const fetchPokemons = (searchParams: any) => {
    const endpoint = ep.baseUrl + ep.pokemon.base + '?limit=200'
    return http().get(endpoint)
}

export function useFetchPokemons(searchParams?: any) {
    return useQuery(['fetchPokemon', searchParams], () => fetchPokemons(searchParams), {
        enabled: true
    })
}