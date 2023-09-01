import React from 'react'
import { render } from '@testing-library/react'
import { BattleHistory } from './BattleHistory.component'
import { BattleHistoryItemProps } from 'components/molecules'

const mockBattleHistory: BattleHistoryItemProps[] = [
  {
    battleDate: '16 Mar 2023',
    battleTime: '3:00 PM',
    winner: { name: 'Pikachu', imageUrl: './assets/pok1.png' },
    pokemons: [
      { name: 'Pikachu', imageUrl: './assets/pok1.png' },
      { name: 'Charmander', imageUrl: './assets/pok2.png' },
    ],
  },
  {
    battleDate: '2023-08-30',
    battleTime: '16:15:00',
    winner: { name: 'Squirtle', imageUrl: './assets/pok2.png' },
    pokemons: [
      { name: 'Squirtle', imageUrl: './assets/pok1.png' },
      { name: 'Bulbasaur', imageUrl: './assets/pok2.png' },
    ],
  },
]

describe('BattleHistory', () => {
  it('renders without errors', () => {
    render(<BattleHistory battleHistoryList={mockBattleHistory} />)
  })
})
