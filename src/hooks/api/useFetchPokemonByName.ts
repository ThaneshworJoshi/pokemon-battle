import { externalApiEndpoints as ep } from "common/constant";
import { useQuery } from "react-query";
import http from "utils/http";

const fetchPokemonByName = (name: string) => {
    const endpoint = ep.baseUrl + ep.pokemon.byName.replace("${name}", name)
    return http().get(endpoint).then((data) => {
        const transformedData = {
            name: data?.name,
            type: data?.types?.[0]?.type?.name,
            hp: data?.stats?.[0]?.base_stat,
            attack: data?.stats?.[1]?.base_stat,
            defense: data?.stats?.[2]?.base_stat,
            speed: data?.stats?.[5]?.base_stat,
            moves: data?.moves?.map((move: any) => move?.move?.name)?.slice(0, 4),
            media: {
                imageUrl: data?.sprites?.other?.dream_world?.front_default,
                altText: data?.name
            }
        }

        return transformedData;
    })
}

export function useFetchPokemonByName(name: string) {
    return useQuery(['fetchPokemon', name], () => fetchPokemonByName(name), {
        enabled: !!name,
    })
}