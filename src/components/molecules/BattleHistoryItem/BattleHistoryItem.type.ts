type TPokemon = { name: string, imageUrl: string }

export interface BattleHistoryItemProps {
    id?: string;
    battleDate: string;
    battleTime: string;
    winner: TPokemon;
    pokemons: TPokemon[];
    userGuess?: string;
}