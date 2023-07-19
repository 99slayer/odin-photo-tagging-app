import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Start } from "../components/Start";

describe("Start component.", () => {
  const mockSetGameStart = () => {
    // ...
  };

  it("Closes on start button click.", () => {
    render(<Start setGameStart={mockSetGameStart} />);
    expect(screen.getByTestId("start-cont")).toHaveClass("open-flex");

    act(() => {
      userEvent.click(screen.getByRole("button", { name: "START" }));
    });

    expect(screen.getByTestId("start-cont")).not.toHaveClass("open-flex");
  });
});
