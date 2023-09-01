type TPokemon = { name: string, imageUrl: string }

export interface BattleHistoryItemProps {
    id?: number;
    battleDate: string;
    battleTime: string;
    winner: TPokemon;
    pokemons: TPokemon[];
}