import React from 'react'
import { render } from '@testing-library/react'
import BattleHistoryItem from './BattleHistoryItem.component'

describe('BattleHistoryItem', () => {
  const mockProps = {
    battleDate: '2023-08-31',
    battleTime: '14:30:00',
    winner: { name: 'Pikachu', imageUrl: 'pikachu-image-url' },
    pokemons: [
      { name: 'Pikachu', imageUrl: 'pikachu-image-url' },
      { name: 'Charmander', imageUrl: 'charmander-image-url' },
    ],
  }

  it('renders without errors', () => {
    render(<BattleHistoryItem {...mockProps} />)
  })

  it('renders battle date and time correctly', () => {
    const { getByText } = render(<BattleHistoryItem {...mockProps} />)
    const battleDateElement = getByText('2023-08-31')
    const battleTimeElement = getByText('14:30:00')

    expect(battleDateElement).toBeInTheDocument()
    expect(battleTimeElement).toBeInTheDocument()
  })

  it('renders pokemon names correctly', () => {
    const { getByText } = render(<BattleHistoryItem {...mockProps} />)
    const pokemon1NameElement = getByText('Pikachu')
    const pokemon2NameElement = getByText('Charmander')

    expect(pokemon1NameElement).toBeInTheDocument()
    expect(pokemon2NameElement).toBeInTheDocument()
  })

  it('renders pokemon images correctly', () => {
    const { getByAltText } = render(<BattleHistoryItem {...mockProps} />)
    const pokemon1Image = getByAltText('pikachu-image-url')
    const pokemon2Image = getByAltText('charmander-image-url')

    expect(pokemon1Image).toBeInTheDocument()
    expect(pokemon2Image).toBeInTheDocument()
  })

  it('renders winner image correctly', () => {
    const { getByAltText } = render(<BattleHistoryItem {...mockProps} />)
    const winnerImage = getByAltText('pikachu-image-url')

    expect(winnerImage).toBeInTheDocument()
  })
})
