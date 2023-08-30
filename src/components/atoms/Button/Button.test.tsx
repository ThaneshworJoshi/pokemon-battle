import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button.component";

describe("Button Component", () => {
  it("renders with default size", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("medium");
    expect(button).not.toHaveClass("small");
    expect(button).not.toHaveClass("big");
  });

  it("renders with small size", () => {
    render(<Button size="small">Small Button</Button>);
    const button = screen.getByText("Small Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("small");
  });

  it("renders with big size", () => {
    render(<Button size="big">Big Button</Button>);
    const button = screen.getByText("Big Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("big");
  });

  it("calls onClick when button is clicked", () => {
    const onClickMock = jest.fn();

    render(<Button onClick={onClickMock}>Click Me</Button>);
    const button = screen.getByText("Click Me");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
