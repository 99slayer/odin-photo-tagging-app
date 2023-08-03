import React, { useState, useEffect } from "react";
import "../styles/EndScreen.css";
import { addHighScore } from "../firebase-config";
import { clockify } from "../utils/clockify";

export const EndScreen = (props) => {
  const { gameEnded, resetGame, finalTime } = props;

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(false);
  }, []);

  const checkName = (name) => {
    name = name.trim();
    if (name) {
      if (typeof name !== "string") {
        console.error("Name parameter needs to be string.");
        return;
      } else if (name.length > 40) {
        console.error("Name parameter too long.");
        return;
      }

      return name;
    } else {
      console.error(`${name} is not a valid name parameter.`);
    }
  };

  const checkTime = (time) => {
    if (time) {
      if (typeof time !== "number") {
        console.error("Time parameter needs to be a number.");
        return;
      } else if (time < 0) {
        console.error("Time parameter cannot be less than zero.");
        return;
      } else if (time > 3600000) {
        console.error("Time parameter is too long to be a highscore.");
        return;
      }

      return time;
    } else {
      console.error(`${time} is not a valid time parameter.`);
    }
  };

  const submitScore = () => {
    const name = document.getElementById("name-input");
    const validatedName = checkName(name.value);
    const validatedTime = checkTime(finalTime);

    if (validatedName && validatedTime) {
      addHighScore(validatedName, validatedTime);
      setSaved(true);
      name.value = "";
    } else {
      return;
    }
  };

  return (
    <div id="end-screen" className={gameEnded ? "open-flex" : ""}>
      <h2 id="end-screen-heading">YOU WON</h2>
      <p id="end-screen-time">Your time was {clockify(finalTime)}</p>
      <div id="submission-cont" className={saved ? "" : "open-flex"}>
        <input id="name-input" type="text"></input>
        <button
          id="submit-score-btn"
          onClick={() => {
            submitScore();
          }}
        >
          submit score
        </button>
      </div>
      <div id="submitted-cont" className={saved ? "open-flex" : ""}>
        Your time has been saved!
      </div>
      <button
        id="new-game-btn"
        onClick={() => {
          resetGame();
          setSaved(false);
        }}
      >
        NEW GAME
      </button>
    </div>
  );
};
