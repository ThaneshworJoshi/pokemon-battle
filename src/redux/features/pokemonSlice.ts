import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BattleHistoryItemProps, BattleCardProps } from 'components/molecules'

interface PokemonState {
    battleHistory: BattleHistoryItemProps[]
    leftOpponent?: BattleCardProps | null
    rightOpponent?: BattleCardProps | null
}

const initialState: PokemonState = {
    leftOpponent: null,
    rightOpponent: null,
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
