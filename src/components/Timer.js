import React, { useEffect, useState } from "react";
import "../styles/Timer.css";

export const Timer = (props) => {
  const { appWidth, gameStart, gameEnded } = props;

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    setX();
  }, [appWidth, gameStart]);

  useEffect(() => {
    window.addEventListener("resize", setX, true);
    return () => {
      window.removeEventListener("resize", setX, true);
    };
  }, []);

  useEffect(() => {
    if (gameStart) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    };
  }, [gameStart]);

  useEffect(() => {
    if (gameEnded) {
      // submit score
      console.log(joinTime());
    }
  }, [gameEnded]);

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      intervalID = setInterval(() => setTime(time + 1), 10);
    } else {
      setTime(0);
    }

    return () => clearInterval(intervalID);
  }, [time, isRunning]);

  const joinTime = () => {
    let mins = Math.floor((time % 360000) / 6000);
    let secs = Math.floor((time % 6000) / 100);
    let millisecs = time % 100;

    if (mins >= 60) {
      // RELOAD PAGE
    };

    if (mins < 10) {
      mins = '0' + mins;
    }

    if (secs < 10) {
      secs = '0' + secs;
    }

    if (millisecs < 10) {
      millisecs = '0' + millisecs
    }

    return `${mins}:${secs}:${millisecs}`;
  };

  // Centers timer component.
  const setX = (e) => {
    setPosition((
      document.querySelector("html").clientWidth -
      document.getElementById("timer-cont").offsetWidth) /
      2
    )
  };

  return (
    <div
      id="timer-cont"
      className={gameStart ? "open-flex" : ""}
      style={{ left: `${position}px` }}
    >
      <span id="timer">{joinTime()}</span>
    </div>
  );
};