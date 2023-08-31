import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { NavItems } from './NavItems.component'
import { type NavItemsProps } from './NavItems.type'
import { MemoryRouter } from 'react-router-dom'

const navItems: NavItemsProps = {
  itemList: [
    { label: 'Home', link: '/' },
    { label: 'Battle', link: '/battle' },
    { label: 'History', link: '/history' },
    { label: 'Pokedex', link: '/pokedex' },
    { label: 'About', link: '/about' }
  ]
}

describe('NavItems component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <NavItems {...navItems} />
      </MemoryRouter>
    )
  })

  it('renders the correct number of items', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <NavItems {...navItems} />
      </MemoryRouter>
    )
    const navItemsList = getAllByRole('link')
    expect(navItemsList).toHaveLength(navItems?.itemList?.length)
  })

  it('displays active items with an image', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <NavItems {...navItems} />
      </MemoryRouter>
    )
    const activeImage = getByAltText('active-image-ball')
    expect(activeImage).toBeInTheDocument()
  })

  it('applies active class to active items', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavItems {...navItems} />
      </MemoryRouter>
    )
    const activeItem = getByText('Home')
    expect(activeItem).toHaveClass('active-item')
  })
})
