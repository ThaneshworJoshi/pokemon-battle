import React, { FC } from "react";
import { NavItemsProps } from "./NavItems.type";
import "./NavItems.scss";

export const NavItems: FC<NavItemsProps> = ({ itemList }) => {
  return (
    <nav>
      <ul className="nav-list">
        {itemList.map((item, index) => (
          <li key={index} className="nav-item">
            <a href="/" className="item-link">
              {item?.isActive && (
                <img
                  src="./assets/ball.png"
                  alt="active-image-ball"
                  className="item-image"
                />
              )}
              <span
                className={`item-label ${item?.isActive ? "active-item" : ""}`}
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
