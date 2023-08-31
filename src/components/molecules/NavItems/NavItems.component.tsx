import React, { type FC } from 'react'
import { type NavItemsProps } from './NavItems.type'
import './NavItems.scss'
import { NavLink, useLocation } from 'react-router-dom'

export const NavItems: FC<NavItemsProps> = ({ itemList }) => {
  const { pathname } = useLocation()

  return (
    <nav className="nav">
      <ul className="nav__list">
        {itemList.map((item, index) => (
          <li key={index} className="nav__item">
            <NavLink to={item?.link} className="nav__item-link">
              {pathname === item?.link && (
                <img
                  src="./assets/ball.png"
                  alt="active-image-ball"
                  className="nav__item-image"
                />
              )}
              <span
                className={`nav__item-label ${
                  pathname === item?.link ? 'active-item' : ''
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavItems
