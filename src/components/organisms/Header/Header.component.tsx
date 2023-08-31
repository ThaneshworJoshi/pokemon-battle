import React, { type FC } from 'react'
import { type HeaderProps } from './Header.type'
import { Logo, NavItems } from '../../molecules'
import './Header.scss'

export const Header: FC<HeaderProps> = ({ navData, logoData }) => {
  return (
    <header className="header">
      <Logo {...logoData} />
      <NavItems {...navData} />
    </header>
  )
}

export default Header
