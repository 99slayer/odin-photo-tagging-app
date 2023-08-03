import React, { useEffect, useState } from "react";
import "../styles/Timer.css";
import { clockify } from "../utils/clockify";

export const Timer = (props) => {
  const { appWidth, gameStart, gameEnded, setFinalTime } = props;

  const [start, setStart] = useState(null);
  const [current, setCurrent] = useState(null);
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
      setStart(Date.now());
    } else {
      setIsRunning(false);
      setStart(null);
    }
  }, [gameStart]);

  useEffect(() => {
    if (gameEnded) {
      setFinalTime(timePassed);
    }
  }, [gameEnded]);

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      intervalID = setInterval(() => {
        setCurrent(Date.now());
      }, 10);
    } else {
      setStart(null);
      setCurrent(null);
    }

    return () => clearInterval(intervalID);
  }, [isRunning]);

  // Time passed in milliseconds.
  const timePassed = current - start;

  // Centers timer component.
  const setX = (e) => {
    setPosition(
      (document.querySelector("html").clientWidth -
        document.getElementById("timer-cont").offsetWidth) /
        2
    );
  };

  return (
    <div
      id="timer-cont"
      className={gameStart ? "open-flex" : ""}
      style={{ left: `${position}px` }}
    >
      <span id="timer">{clockify(timePassed)}</span>
    </div>
  );
};
