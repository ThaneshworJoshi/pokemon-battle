import React, { type FC, useState, useRef, useEffect } from 'react'
import './Select.scss'
import { type SelectProps } from './Select.type'

export const Select: FC<SelectProps> = ({
  fullWidth,
  value,
  styles,
  options,
  label,
  onChangeHandler,
}) => {
  const [showList, setShowList] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const filteredItem = options.filter((pokemon) =>
    pokemon.toLowerCase().includes(value?.toLowerCase() ?? '')
  )

  const handleItemClick = (item: string) => {
    setShowList(false)
    onChangeHandler(item)
  }

  const onInputChangeHandler = (event: any) => {
    setShowList(true)
    onChangeHandler(event.target.value)
  }

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setShowList(false)
    }
  }

  // Attach click event listener when the component mounts
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className={`search ${fullWidth ? 'full-width' : ''}`}
      {...styles}
      ref={dropdownRef}
    >
      {label && <p className="search__title">{label}</p>}
      <div className="search__input-container">
        <button className="search__button--left" disabled>
          <img src="./assets/ball.png" className="search__image--left" />
        </button>
        <input
          type="text"
          className="search__input"
          placeholder="Search..."
          value={value}
          onChange={onInputChangeHandler}
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
          {filteredItem.length ? (
            filteredItem.map((item) => (
              <li
                onClick={() => {
                  handleItemClick(item)
                }}
                key={item}
              >
                {item}
              </li>
            ))
          ) : (
            <li>No Option</li>
          )}
        </ul>
      )}
    </div>
  )
}

export default Select
