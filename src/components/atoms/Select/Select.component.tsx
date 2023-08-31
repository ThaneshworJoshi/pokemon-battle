// import React, { FC } from "react";
// import { SelectProps } from "./Select.type";
// import "./Select.scss";

// export const Select: FC<SelectProps> = () => {
//   return <div>Select</div>;
// };

// export default Select;

// PokemonSearch.js
import React, { FC, useState } from "react";
import "./Select.scss";
import { SelectProps } from "./Select.type";

export const Select: FC<SelectProps> = ({ fullWidth, styles, items }) => {
  const [filter, setFilter] = useState("");
  const [showList, setShowList] = useState(true);
  const filteredItem = items.filter((pokemon) =>
    pokemon.toLowerCase().includes(filter.toLowerCase())
  );

  const handleItemClick = (item: string) => {
    setFilter(item);
    setShowList(false);
  };

  const onChangeHandler = (event: any) => {
    setFilter(event.target.value);
    setShowList(true);
  };

  return (
    <div className={`search ${fullWidth ? "full-width" : ""}`} {...styles}>
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
          onClick={() => setShowList(!showList)}
        >
          <img src="./assets/arrow.png" alt="Search" />
        </button>
      </div>
      {showList && (
        <ul className="select__list">
          {filteredItem.map((item) => (
            <li onClick={() => handleItemClick(item)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
