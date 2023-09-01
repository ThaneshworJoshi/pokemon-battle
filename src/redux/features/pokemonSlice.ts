import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BattleHistoryItemProps, BattleCardProps } from 'components/molecules'

interface PokemonState {
    battleHistory: BattleHistoryItemProps[]
    leftOpponent?: BattleCardProps | null
    rightOpponent?: BattleCardProps | null
}

const initialState: PokemonState = {
    leftOpponent: {
        name: 'Blastoise',
        type: 'Water',
        hp: 267,
        moves: ['Flash Cannon', 'Hyper Beam', 'Aqua Ring', 'Hydro Canon'],
        media: {
            imageUrl: './assets/pok1.png',
            altText: 'alt-text',
        },
        // isLooser: true,
    },
    rightOpponent: {
        name: 'Bulbasour',
        type: 'Grass',
        hp: 345,
        moves: ['Razor Leaf', 'Seed Bomb', 'Solar Beam', 'Rock Smash'],
        media: {
            imageUrl: './assets/pok2.png',
            altText: 'alt-text',
        },
        // isWinner: true,
    },
    battleHistory: []
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addLeftOpponent: (state, action: PayloadAction<BattleCardProps>) => {
            state.leftOpponent = action.payload;
        },
        addRightOpponent: (state, action: PayloadAction<BattleCardProps>) => {
            state.rightOpponent = action.payload;
        },
        addBattle: (state, action: PayloadAction<BattleHistoryItemProps>) => {
            state.battleHistory.push(action.payload)
        },
        loadBattleHistory: (state, action: PayloadAction<BattleHistoryItemProps[]>) => {
            state.battleHistory = action.payload
        },
    }
})

export const { addLeftOpponent, addRightOpponent, addBattle } = pokemonSlice.actions

export default pokemonSlice.reducer
