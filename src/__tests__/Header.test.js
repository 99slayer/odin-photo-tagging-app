import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Header } from "../components/Header";

describe("header component", () => {
  // testing by class name
  describe("highscores screen", () => {
    beforeEach(() => {
      render(<Header />);
    });

    it("render on highscores button click", () => {
      expect(screen.getByTestId('highscore-screen')).not.toHaveClass('open-flex');
      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'High Scores' }));
      });
      expect(screen.getByTestId('highscore-screen')).toHaveClass('open-flex');
    });

    it("closes on exit button click", () => {
      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'High Scores' }));
      });
      expect(screen.getByTestId('highscore-screen')).toHaveClass('open-flex');
      act(() => {
        userEvent.click(screen.getByTestId('highscore-exit-btn'));
      });
      expect(screen.getByTestId('highscore-screen')).not.toHaveClass('open-flex');
    });
  });

  // testing by class name
  describe("gamehelp screen", () => {
    beforeEach(() => {
      render(<Header />);
    });

    it("render on gamehelp button click", () => {
      expect(screen.getByTestId('gamehelp-screen')).not.toHaveClass('open-flex');
      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'Game Help' }));
      });
      expect(screen.getByTestId('gamehelp-screen')).toHaveClass('open-flex');
    });

    it("closes on exit button click", () => {
      act(() => {
        userEvent.click(screen.getByRole('button', { name: 'Game Help' }));
      });
      expect(screen.getByTestId('gamehelp-screen')).toHaveClass('open-flex');
      act(() => {
        userEvent.click(screen.getByTestId('gamehelp-exit-btn'));
      });
      expect(screen.getByTestId('gamehelp-screen')).not.toHaveClass('open-flex');
    });
  });
});