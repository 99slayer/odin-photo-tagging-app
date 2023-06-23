import React, { useState } from "react";
import "../styles/Main.css";

export const Main = () => {
  const [gameStart, setGameStart] = useState(false);

  return (
    <div id="main-component">
      <div id="start-cont" className={gameStart ? 'close' : 'open-flex'}>
        <p>GAME INSTRUCTIONS PLACEHOLDER</p>
        <button id="main-start-btn" onClick={() => { setGameStart(true) }}>START</button>
      </div>
      <div id="target-cont">
        <div>yellow fish</div>
        <div>purple octopus</div>
        <div>surfing duck</div>
      </div>
      <div id="main-cont" className={gameStart ? 'open-flex' : 'close'}>
        <img src="Annika-Brandow-Waterpark.jpg" />
      </div>
    </div>
  );
};