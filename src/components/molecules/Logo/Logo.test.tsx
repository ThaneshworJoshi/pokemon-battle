import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Logo } from "./Logo.component";

describe("Logo component", () => {
  const logoData = {
    media: {
      imageUrl: "https://pokemon/logo.png",
      altText: "logo alt",
    },
    link: "/",
  };

  it("renders without crashing", () => {
    render(<Logo {...logoData} />);
  });

  it("renders with default props", () => {
    const { getByAltText } = render(<Logo {...logoData} />);
    expect(getByAltText("logo alt")).toBeInTheDocument();
  });

  it("calls onClick event", () => {
    const { getByRole } = render(<Logo {...logoData} />);
    const logoLink = getByRole("link");
    expect(logoLink).toHaveAttribute("href", logoData.link);
  });
});
