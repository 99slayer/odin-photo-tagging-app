import React from "react";
import "../styles/EndScreen.css";

export const EndScreen = (props) => {
  const { gameEnded, resetGame } = props;

  return (
    <div id="end-screen" className={gameEnded ? "open-flex" : ""}>
      <h2>YOU WON</h2>
      <p>Your time was *insert time*</p>
      <div>{/* show their ranked highscore */}</div>
      <button
        onClick={() => {
          resetGame();
        }}
      >
        NEW GAME
      </button>
    </div>
  );
};
