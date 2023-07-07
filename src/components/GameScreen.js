import React, { useState } from "react";
import { HighScores } from "./HighScores";
import { GameHelp } from "./GameHelp";
import "../styles/GameScreen.css";

export const GameScreen = (props) => {
  const { gameStart, btnPosition, gamescreenPosition } = props;
  const [openHighScores, setOpenHighScores] = useState(false);
  const [openGameHelp, setOpenGameHelp] = useState(false);

  const openScreen = (btn) => {
    switch (btn) {
      case "highscores":
        if (openHighScores) {
          break;
        } else if (openGameHelp) {
          setOpenGameHelp(false);
          setOpenHighScores(true);
          break;
        } else {
          setOpenHighScores(true);
          break;
        }

      case "gamehelp":
        if (openGameHelp) {
          break;
        } else if (openHighScores) {
          setOpenHighScores(false);
          setOpenGameHelp(true);
          break;
        } else {
          setOpenGameHelp(true);
          break;
        }

      default:
        console.log("No case match.");
        break;
    }
  };

  const closeScreen = (btn) => {
    switch (btn) {
      case "highscores":
        setOpenHighScores(false);
        break;
      case "gamehelp":
        setOpenGameHelp(false);
        break;
      default:
        console.log(`ERROR: problem closing screen ${btn}.`);
    }
  };

  return (
    <div
      id="game-screen-component"
      className={gameStart ? "open-flex" : "closed"}
    >
      <div
        id="game-screen-btns"
        style={{
          left: `${btnPosition.x}px`,
          top: `${btnPosition.y}px`,
        }}
      >
        <button
          id="highscore-btn"
          className="game-screen-btn"
          onClick={() => {
            openScreen("highscores");
          }}
        >
          <span className="material-symbols-outlined">sort</span>
        </button>
        <button
          id="gamehelp-btn"
          className="game-screen-btn"
          onClick={() => {
            openScreen("gamehelp");
          }}
        >
          <span className="material-symbols-outlined">info</span>
        </button>
      </div>
      <HighScores
        isOpen={openHighScores}
        closeFunc={closeScreen}
        gamescreenPosition={gamescreenPosition}
      />
      <GameHelp
        isOpen={openGameHelp}
        closeFunc={closeScreen}
        gamescreenPosition={gamescreenPosition}
      />
    </div>
  );
};
