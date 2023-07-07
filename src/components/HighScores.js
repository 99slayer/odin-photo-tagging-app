import React from "react";
import "../styles/HighScores.css";

export const HighScores = (props) => {
  const { isOpen, closeFunc, gamescreenPosition } = props;

  return (
    <div
      id="highscores-component"
      className={isOpen ? "open-flex" : ""}
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
