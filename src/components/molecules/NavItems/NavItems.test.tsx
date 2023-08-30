import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { NavItems } from "./NavItems.component";
import { NavItemsProps } from "./NavItems.type";

const navItems: NavItemsProps = {
  itemList: [
    { label: "Home", link: "/", isActive: true },
    { label: "Battle", link: "/battle" },
    { label: "History", link: "/history" },
    { label: "Pokedex", link: "/pokedex" },
    { label: "About", link: "/about" },
  ],
};

describe("NavItems component", () => {
  it("renders without crashing", () => {
    render(<NavItems {...navItems} />);
  });

  it("renders the correct number of items", () => {
    const { getAllByRole } = render(<NavItems {...navItems} />);
    const navItemsList = getAllByRole("link");
    expect(navItemsList).toHaveLength(navItems?.itemList?.length);
  });

  it("displays active items with an image", () => {
    const { getByAltText } = render(<NavItems {...navItems} />);
    const activeImage = getByAltText("active-image-ball");
    expect(activeImage).toBeInTheDocument();
  });

  it("applies active class to active items", () => {
    const { getByText } = render(<NavItems {...navItems} />);
    const activeItem = getByText("Home");
    expect(activeItem).toHaveClass("active-item");
  });
});
