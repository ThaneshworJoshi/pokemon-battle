import React from 'react'
import {} from 'components/molecules'
import './History.scss'
import { BattleHistory, BattleHistoryItemProps } from 'components'

const mockBattleHistory: BattleHistoryItemProps[] = [
  {
    id: '1',
    battleDate: '16 Mar 2023',
    battleTime: '3:00 PM',
    winner: { name: 'Pikachu', imageUrl: './assets/pok1.png' },
    pokemons: [
      { name: 'Pikachu', imageUrl: './assets/pok1.png' },
      { name: 'Charmander', imageUrl: './assets/pok2.png' },
    ],
  },
  {
    id: '2',
    battleDate: '2023-08-30',
    battleTime: '16:15:00',
    winner: { name: 'Squirtle', imageUrl: './assets/pok2.png' },
    pokemons: [
      { name: 'Squirtle', imageUrl: './assets/pok1.png' },
      { name: 'Bulbasaur', imageUrl: './assets/pok2.png' },
    ],
  },
  {
    id: '3',
    battleDate: '2023-08-30',
    battleTime: '16:15:00',
    winner: { name: 'Squirtle', imageUrl: './assets/pok2.png' },
    pokemons: [
      { name: 'Squirtle', imageUrl: './assets/pok1.png' },
      { name: 'Bulbasaur', imageUrl: './assets/pok2.png' },
    ],
  },
  {
    id: '4',
    battleDate: '2023-08-30',
    battleTime: '16:15:00',
    winner: { name: 'Squirtle', imageUrl: './assets/pok2.png' },
    pokemons: [
      { name: 'Squirtle', imageUrl: './assets/pok1.png' },
      { name: 'Bulbasaur', imageUrl: './assets/pok2.png' },
    ],
  },
  {
    id: '5',
    battleDate: '2023-08-30',
    battleTime: '16:15:00',
    winner: { name: 'Squirtle', imageUrl: './assets/pok2.png' },
    pokemons: [
      { name: 'Squirtle', imageUrl: './assets/pok1.png' },
      { name: 'Bulbasaur', imageUrl: './assets/pok2.png' },
    ],
  },
  {
    id: '6',
    battleDate: '2023-08-30',
    battleTime: '16:15:00',
    winner: { name: 'Squirtle', imageUrl: './assets/pok2.png' },
    pokemons: [
      { name: 'Squirtle', imageUrl: './assets/pok1.png' },
      { name: 'Bulbasaur', imageUrl: './assets/pok2.png' },
    ],
  },
  {
    id: '7',
    battleDate: '2023-08-30',
    battleTime: '16:15:00',
    winner: { name: 'Squirtle', imageUrl: './assets/pok2.png' },
    pokemons: [
      { name: 'Squirtle', imageUrl: './assets/pok1.png' },
      { name: 'Bulbasaur', imageUrl: './assets/pok2.png' },
    ],
  },
  {
    id: '8',
    battleDate: '2023-08-30',
    battleTime: '16:15:00',
    winner: { name: 'Squirtle', imageUrl: './assets/pok2.png' },
    pokemons: [
      { name: 'Squirtle', imageUrl: './assets/pok1.png' },
      { name: 'Bulbasaur', imageUrl: './assets/pok2.png' },
    ],
  },
]

export const History = () => {
  return (
    <div className="battle-history">
      <BattleHistory battleHistoryList={mockBattleHistory} />
    </div>
  )
}

export default History
