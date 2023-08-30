import React, { FC } from "react";
import { NavItemsProps } from "./NavItems.type";
import "./NavItems.scss";
import { NavLink, useLocation } from "react-router-dom";

export const NavItems: FC<NavItemsProps> = ({ itemList }) => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="nav-list">
        {itemList.map((item, index) => (
          <li key={index} className="nav-item">
            <NavLink to={item?.link} className="item-link">
              {pathname === item?.link && (
                <img
                  src="./assets/ball.png"
                  alt="active-image-ball"
                  className="item-image"
                />
              )}
              <span
                className={`item-label ${
                  pathname === item?.link ? "active-item" : ""
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
