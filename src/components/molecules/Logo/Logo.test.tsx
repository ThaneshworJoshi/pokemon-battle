import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Logo } from './Logo.component'
import { MemoryRouter } from 'react-router-dom'

describe('Logo component', () => {
  const logoData = {
    media: {
      imageUrl: 'https://pokemon/logo.png',
      altText: 'logo alt'
    },
    link: '/'
  }

  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Logo {...logoData} />{' '}
      </MemoryRouter>
    )
  })

  it('renders with default props', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Logo {...logoData} />{' '}
      </MemoryRouter>
    )
    expect(getByAltText('logo alt')).toBeInTheDocument()
  })

  it('calls onClick event', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Logo {...logoData} />{' '}
      </MemoryRouter>
    )
    const logoLink = getByRole('link')
    expect(logoLink).toHaveAttribute('href', logoData.link)
  })
})
