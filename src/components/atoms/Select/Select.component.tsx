import React, { type FC, useState } from 'react'
import './Select.scss'
import { type SelectProps } from './Select.type'

export const Select: FC<SelectProps> = ({
  fullWidth,
  styles,
  items,
  label,
}) => {
  const [filter, setFilter] = useState('')
  const [showList, setShowList] = useState(false)
  const filteredItem = items.filter((pokemon) =>
    pokemon.toLowerCase().includes(filter.toLowerCase())
  )

  const handleItemClick = (item: string) => {
    setFilter(item)
    setShowList(false)
  }

  const onChangeHandler = (event: any) => {
    setFilter(event.target.value)
    setShowList(true)
  }

  return (
    <div className={`search ${fullWidth ? 'full-width' : ''}`} {...styles}>
      {label && <p className="search__title">{label}</p>}
      <div className="search__input-container">
        <button className="search__button--left" disabled>
          <img src="./assets/ball.png" className="search__image--left" />
        </button>
        <input
          type="text"
          className="search__input"
          placeholder="Search..."
          value={filter}
          onChange={onChangeHandler}
        />
        <button
          className="search__button"
          onClick={() => {
            setShowList(!showList)
          }}
        >
          <img src="./assets/arrow.png" alt="Search" />
        </button>
      </div>
      {showList && (
        <ul className="select__list">
          {filteredItem.map((item) => (
            <li
              onClick={() => {
                handleItemClick(item)
              }}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
