import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header.component";
import { HeaderProps } from "./Header.type";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
  const headerData: HeaderProps = {
    navData: {
      itemList: [
        { label: "Home", link: "/" },
        { label: "Battle", link: "/battle" },
        { label: "History", link: "/history" },
        { label: "Pokedex", link: "/pokedex" },
        { label: "About", link: "/about" },
      ],
    },
    logoData: {
      media: {
        imageUrl: "https://pokemon/logo.png",
        altText: "logo alt",
      },
      link: "/",
    },
  };

  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Header {...headerData} />
      </MemoryRouter>
    );
  });
});
