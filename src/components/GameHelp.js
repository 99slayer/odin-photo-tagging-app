import React from "react";
import "../styles/GameHelp.css";

export const GameHelp = (props) => {
  const { isOpen, closeFunc } = props;

  return (
    <div id="gamehelp-component" className={isOpen ? 'open' : ''}>
      <div id="gamehelp-header">
        <h2 id="gamehelp-heading">GAME HELP</h2>
        <button id="gamehelp-exit-btn" onClick={() => { closeFunc('gamehelp') }}>X</button>
      </div>
      <div id="gamehelp-info">
        <p>PLACEHOLDER</p>
      </div>
    </div>
  );
};