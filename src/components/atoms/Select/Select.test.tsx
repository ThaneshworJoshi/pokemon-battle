import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Select } from "./Select.component";

const items = [
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Pikachu",
  "Eevee",
  "Jigglypuff",
  "Snorlax",
  "Mewtwo",
  "Gengar",
  "Dragonite",
];

describe("Select Component", () => {
  it("renders correctly", () => {
    render(<Select items={items} />);
  });
});
