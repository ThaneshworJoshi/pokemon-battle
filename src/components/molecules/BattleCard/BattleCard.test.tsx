import React from "react";
import { render } from "@testing-library/react";
import BattleCard from "./BattleCard.component";

const mockPokemon = {
  name: "Pikachu",
  type: "Electric",
  hp: 60,
  moves: ["Thunderbolt", "Quick Attack"],
  media: {
    imageUrl: "./assets/pokemon.png",
    altText: "alt-text",
  },
};

describe("BattleCard component", () => {
  it("renders without crashing", () => {
    render(<BattleCard {...mockPokemon} />);
  });

  it("renders with provided props", () => {
    const { getByText, getByAltText } = render(<BattleCard {...mockPokemon} />);

    const nameElement = getByText("Pikachu");
    const typeElement = getByText("Electric");
    const hpElement = getByText("HP");
    const moveElement1 = getByText("Thunderbolt");
    const moveElement2 = getByText("Quick Attack");
    const imageElement = getByAltText("alt-text");

    expect(nameElement).toBeInTheDocument();
    expect(typeElement).toBeInTheDocument();
    expect(hpElement).toBeInTheDocument();
    expect(moveElement1).toBeInTheDocument();
    expect(moveElement2).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
