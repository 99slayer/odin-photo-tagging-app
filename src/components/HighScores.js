import React from "react";
import "../styles/HighScores.css";

export const HighScores = (props) => {
  const { isOpen, closeFunc } = props;

  return (
    <div id="highscores-component" className={isOpen ? 'open' : ''}>
      <div id="highscore-header">
        <h2 id="highscore-heading">HIGH SCORES</h2>
        <button id="highscore-exit-btn" onClick={() => { closeFunc('highscores') }}>X</button>
      </div>
      <ul>
        {/* highscores */}
      </ul>
    </div>
  );
};