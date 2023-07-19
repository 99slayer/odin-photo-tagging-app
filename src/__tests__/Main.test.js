import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Main } from "../components/Main";

describe("Main component.", () => {
  let mockAppWidth = 0;
  const mockChangeAppWidth = () => {
    // ...
  };

  beforeEach(() => {
    render(
      <Main appWidth={mockAppWidth} changeAppWidth={mockChangeAppWidth} />
    );
    act(() => {
      userEvent.click(screen.getByRole("button", { name: "START" }));
    });
  });

  describe("Image component.", () => {
    it("Opens the target dropdown on click.", () => {
      expect(screen.getByTestId("drop-down")).not.toHaveClass("open-flex");

      act(() => {
        userEvent.click(screen.getByTestId("image"));
      });

      expect(screen.getByTestId("drop-down")).toHaveClass("open-flex");
    });

    it("Closes the target dropdown when the user clicks outside of it.", () => {
      expect(screen.getByTestId("drop-down")).not.toHaveClass("open-flex");

      act(() => {
        userEvent.click(screen.getByTestId("image"));
      });

      expect(screen.getByTestId("drop-down")).toHaveClass("open-flex");

      act(() => {
        userEvent.click(screen.getByTestId("image"));
      });

      expect(screen.getByTestId("drop-down")).not.toHaveClass("open-flex");
    });
  });
});
