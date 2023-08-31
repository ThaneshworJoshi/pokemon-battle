type TPokemon = { name: string, imageUrl: string }

export interface BattleHistoryItemProps {
    battleDate: string;
    battleTime: string;
    winner: TPokemon;
    pokemons: TPokemon[];
}