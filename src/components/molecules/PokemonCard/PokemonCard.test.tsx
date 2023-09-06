import React from 'react'
import { render, screen } from '@testing-library/react'
import PokemonCard from './PokemonCard.component'

describe('PokemonCard component', () => {
  const mockPokemon = {
    name: 'Pikachu',
    type: 'Electric',
    url: 'https://pokeapi.co/api/v2/pokemon/11/',
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
    expect(imageElement).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg'
    )
  })
})
