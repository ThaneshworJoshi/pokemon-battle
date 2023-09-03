import React from 'react'
import { render, screen } from '@testing-library/react'
import PokemonCard from './PokemonCard.component'

describe('PokemonCard component', () => {
  const mockPokemon = {
    name: 'Pikachu',
    type: 'Electric',
    media: {
      imageUrl: 'pikachu.jpg',
      altText: 'alt',
    },
  }

  it('renders the Pokemon name', () => {
    render(<PokemonCard {...mockPokemon} />)
    const nameElement = screen.getByText(mockPokemon.name)
    expect(nameElement).toBeInTheDocument()
  })

  it('renders the Pokemon image with alt text', () => {
    render(<PokemonCard {...mockPokemon} />)
    const imageElement = screen.getByAltText(mockPokemon.name)
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', mockPokemon.media?.imageUrl)
  })
})
