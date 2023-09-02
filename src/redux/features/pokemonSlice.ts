import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BattleHistoryItemProps, BattleCardProps } from 'components/molecules'

interface PokemonState {
    battleHistory: BattleHistoryItemProps[]
    leftOpponent?: BattleCardProps
    rightOpponent?: BattleCardProps
}

const initialState: PokemonState = {
    leftOpponent: {},
    rightOpponent: {},
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
        updateWinner: (state, action: PayloadAction<BattleCardProps>) => {
            if (state.rightOpponent && state.leftOpponent && action.payload.name) {
                if (state.leftOpponent?.name === action.payload.name && action.payload.isWinner) {
                    state.leftOpponent.isWinner = true;
                    state.rightOpponent.isLooser = true;
                } else {
                    state.leftOpponent.isLooser = true;
                    state.rightOpponent.isWinner = true;
                }
            } else {
                state.leftOpponent = {}
                state.rightOpponent = {}
            }
        },

        addBattle: (state, action: PayloadAction<BattleHistoryItemProps>) => {
            state.battleHistory.push(action.payload)
        },
        loadBattleHistory: (state, action: PayloadAction<BattleHistoryItemProps[]>) => {
            state.battleHistory = action.payload
        },
    }
})

export const { addLeftOpponent, addRightOpponent, addBattle, updateWinner } = pokemonSlice.actions

export default pokemonSlice.reducer
