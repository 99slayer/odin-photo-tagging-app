import React, { useEffect } from "react";
import "../styles/HighScores.css";
import useComponentVisible from "../hooks/useComponentVisible";

export const HighScores = (props) => {
  const { isOpen, closeFunc, gamescreenPosition } = props;

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  // Closes highscore menu if the user clicks outside of it.
  useEffect(() => {
    if (isOpen) {
      setIsComponentVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && !isComponentVisible) {
      closeFunc("highscores");
    }
  }, [isComponentVisible]);

  return (
    <div
      id="highscores-component"
      className={isOpen ? "open-flex" : ""}
      ref={ref}
      data-testid="highscore-screen"
      style={{ left: gamescreenPosition }}
    >
      <div id="highscore-header">
        <h2 id="highscore-heading">HIGH SCORES</h2>
        <button
          id="highscore-exit-btn"
          onClick={() => {
            closeFunc("highscores");
          }}
          data-testid="highscore-exit-btn"
        >
          X
        </button>
      </div>
      <ul>{/* highscores */}</ul>
    </div>
  );
};
