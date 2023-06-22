import React from "react";
import "../styles/Header.css";

export const Header = () => {
  return (
    <div id="header-component">
      <h1 id="heading">Odin Photo Search</h1>
      <div id="header-btns">
        <button>High Scores</button>
        <button>Game Help</button>
      </div>
    </div>
  );
};