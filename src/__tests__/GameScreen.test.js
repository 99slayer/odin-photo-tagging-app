import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { GameScreen } from "../components/GameScreen";

describe("GameScreen component.", () => {
  const mockSetGamescreenOpen = () => {
    // ...
  };

  beforeEach(() => {
    render(<GameScreen setGamescreenOpen={mockSetGamescreenOpen} />);
  });

  describe("HighScores.", () => {
    it("Opens highscore screen when highscore button is clicked.", () => {
      expect(screen.getByTestId("highscore-screen")).not.toHaveClass(
        "open-flex"
      );
      act(() => {
        userEvent.click(screen.getByTestId("highscore-btn"));
      });
      expect(screen.getByTestId("highscore-screen")).toHaveClass("open-flex");
    });

    it("Closes highscore screen when exit button is clicked.", () => {
      expect(screen.getByTestId("highscore-screen")).not.toHaveClass(
        "open-flex"
      );
      act(() => {
        userEvent.click(screen.getByTestId("highscore-btn"));
      });
      expect(screen.getByTestId("highscore-screen")).toHaveClass("open-flex");
      act(() => {
        userEvent.click(screen.getByTestId("highscore-exit-btn"));
      });
      expect(screen.getByTestId("highscore-screen")).not.toHaveClass(
        "open-flex"
      );
    });
  });

  describe("GameHelp.", () => {
    it("Opens gamehelp screen when gamehelp button is clicked.", () => {
      expect(screen.getByTestId("gamehelp-screen")).not.toHaveClass(
        "open-flex"
      );
      act(() => {
        userEvent.click(screen.getByTestId("gamehelp-btn"));
      });
      expect(screen.getByTestId("gamehelp-screen")).toHaveClass("open-flex");
    });

    it("Closes gamehelp screen when exit button is clicked.", () => {
      expect(screen.getByTestId("gamehelp-screen")).not.toHaveClass(
        "open-flex"
      );
      act(() => {
        userEvent.click(screen.getByTestId("gamehelp-btn"));
      });
      expect(screen.getByTestId("gamehelp-screen")).toHaveClass("open-flex");
      act(() => {
        userEvent.click(screen.getByTestId("gamehelp-exit-btn"));
      });
      expect(screen.getByTestId("gamehelp-screen")).not.toHaveClass(
        "open-flex"
      );
    });
  });
});
