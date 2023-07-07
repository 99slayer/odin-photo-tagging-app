import React from "react";
import "../styles/GameHelp.css";

export const GameHelp = (props) => {
  const { isOpen, closeFunc, gamescreenPosition } = props;

  return (
    <div
      id="gamehelp-component"
      className={isOpen ? "open-flex" : ""}
      data-testid="gamehelp-screen"
      style={{ left: gamescreenPosition }}
    >
      <div id="gamehelp-header">
        <h2 id="gamehelp-heading">GAME HELP</h2>
        <button
          id="gamehelp-exit-btn"
          onClick={() => {
            closeFunc("gamehelp");
          }}
          data-testid="gamehelp-exit-btn"
        >
          X
        </button>
      </div>
      <div id="gamehelp-info">
        <p>PLACEHOLDER</p>
      </div>
    </div>
  );
};
