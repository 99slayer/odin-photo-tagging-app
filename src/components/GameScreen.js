import React, { useState, useEffect } from "react";
import { HighScores } from "./HighScores";
import { GameHelp } from "./GameHelp";
import "../styles/GameScreen.css";

export const GameScreen = (props) => {
  const { appWidth, gameStart, gameEnded, setGamescreenOpen } = props;

  const [open, setOpen] = useState(null);
  const [btnPosition, setBtnPosition] = useState({
    x: document.querySelector("html").clientWidth - 60,
    y: 80,
  });

  useEffect(() => {
    setBtnPosition({
      x: document.querySelector("html").clientWidth - 60,
      y: 80,
    });
  }, [gameEnded]);

  useEffect(() => {
    setBtnX();
  }, [appWidth, gameStart]);

  useEffect(() => {
    window.addEventListener("resize", setBtnX, true);
    window.addEventListener("scroll", setBtnY, true);
    return () => {
      window.removeEventListener("resize", setBtnX, true);
      window.removeEventListener("scroll", setBtnY, true);
    };
  }, []);

  // Stops the user from opening the dropdown menu if a gamescreen is open.
  useEffect(() => {
    if (!open) {
      setGamescreenOpen(false);
    } else {
      setGamescreenOpen(true);
    }
  }, [open]);

  const setBtnX = (e) => {
    if (document.querySelector("body").clientHeight > window.innerHeight) {
      setBtnPosition((prev) => ({
        ...prev,
        x:
          window.innerWidth -
          (60 +
            (window.innerWidth - document.querySelector("html").clientWidth)),
      }));
    } else {
      setBtnPosition((prev) => ({
        ...prev,
        x: document.querySelector("html").clientWidth - 60,
      }));
    }
  };

  const setBtnY = (e) => {
    const headerHeight = 80;
    let headerOffset;

    if (window.scrollY > headerHeight) {
      headerOffset = 0;
    } else if (window.scrollY > 0) {
      headerOffset = Math.round(headerHeight - window.scrollY);
    }

    setBtnPosition((prev) => ({
      ...prev,
      y: headerOffset,
    }));
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
          data-testid="highscore-btn"
          onClick={() => {
            setOpen("highscores");
          }}
        >
          <span className="material-symbols-outlined">sort</span>
        </button>
        <button
          id="gamehelp-btn"
          className="game-screen-btn"
          data-testid="gamehelp-btn"
          onClick={() => {
            setOpen("gamehelp");
          }}
        >
          <span className="material-symbols-outlined">info</span>
        </button>
      </div>
      <HighScores open={open} setOpen={setOpen} />
      <GameHelp open={open} setOpen={setOpen} />
    </div>
  );
};
