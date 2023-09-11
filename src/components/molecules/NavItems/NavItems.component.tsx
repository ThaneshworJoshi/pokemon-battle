import React, { useState, type FC } from 'react'
import { type NavItemsProps } from './NavItems.type'
import './NavItems.scss'
import { NavLink, useLocation } from 'react-router-dom'

export const NavItems: FC<NavItemsProps> = ({ itemList }) => {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(true)

  const toggleSidebar = () => {
    setVisible(!visible)
  }

  return (
    <nav className="nav">
      <ul className={`nav__list ${visible ? 'visible' : 'hidden'}`}>
        {itemList.map((item, index) => (
          <li key={index} className="nav__item">
            <NavLink to={item?.link} className="nav__item-link">
              <span className="nav__item-image">
                {pathname === item?.link && (
                  <img src="./assets/ball.png" alt="active-image-ball" />
                )}
              </span>
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
        <button
          className="nav__toggle-btn nav__close-btn"
          onClick={toggleSidebar}
        >
          <img src="./assets/cross.png" className="nav__toggle-img" />
        </button>
      </ul>
      <button className="nav__toggle-btn" onClick={toggleSidebar}>
        <img src="./assets/menu.png" className="nav__toggle-img" />
      </button>
    </nav>
  )
}

export default NavItems
