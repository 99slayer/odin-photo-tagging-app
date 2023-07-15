import React from "react";
import "../styles/Start.css";

export const Start = (props) => {
  const { gameStart, setGameStart } = props;

  return (
    <div
      id="start-cont"
      className={gameStart ? "closed" : "open-flex"}
      data-testid="start-cont"
    >
      <p id="start-text">Try and find the targets as fast as you can!</p>
      <button
        id="start-btn"
        onClick={() => {
          setGameStart(true);
        }}
      >
        START
      </button>
    </div>
  );
};
