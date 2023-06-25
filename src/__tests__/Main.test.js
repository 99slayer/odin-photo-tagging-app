import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Main } from "../components/Main";

describe("main component", () => {
  describe("start-cont", () => {
    it("closes start-cont and opens main-cont on start btn click", () => {
      render(<Main />);
      expect(screen.getByTestId('start-cont')).toHaveClass('open-flex');
      expect(screen.getByTestId('main-cont')).toHaveClass('closed');
      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'START' }));
      })
      expect(screen.getByTestId('start-cont')).toHaveClass('closed');
      expect(screen.getByTestId('main-cont')).toHaveClass('open-flex');
    });
  });
});