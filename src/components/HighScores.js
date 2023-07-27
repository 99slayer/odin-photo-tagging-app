import React, { useState, useEffect } from "react";
import "../styles/HighScores.css";
import uniqid from "uniqid";
import useComponentVisible from "../hooks/useComponentVisible";
import { clockify } from "../utils/clockify";
import { getHighScores, addHighScore } from "../firebase-config";

export const HighScores = (props) => {
  const { open, setOpen } = props;

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [screenPosition, setScreenPosition] = useState(
    (document.querySelector("html").clientWidth -
      document.querySelector("html").clientWidth * 0.7) /
      2
  );
  const [scoresState, setScoresState] = useState(null);

  useEffect(() => {
    updateHighScores();
    window.addEventListener("resize", setScreenX, true);
    return () => {
      window.removeEventListener("resize", setScreenX, true);
    };
  }, []);

  // Closes highscore menu if the user clicks outside of it.
  useEffect(() => {
    if (open === "highscores") {
      setIsComponentVisible(true);
    }
  }, [open]);

  useEffect(() => {
    if (open === "highscores" && !isComponentVisible) {
      setOpen(null);
    }
  }, [isComponentVisible]);

  const setScreenX = (e) => {
    setScreenPosition(
      (document.querySelector("html").clientWidth -
        document.querySelector("html").clientWidth * 0.7) /
        2
    );
  };

  const updateHighScores = async () => {
    await getHighScores().then((scores) => {
      const scoresSorted = scores.sort((a, b) => a.time - b.time);
      setScoresState(scoresSorted);
    });
  };

  const createHighScores = () => {
    const highScoreElements = [];

    scoresState.forEach((score, index) => {
      highScoreElements.push(
        <li className="score" key={uniqid()}>
          <p>{index + 1 + "."}</p>
          <p>{score.name}</p>
          <p>{clockify(score.time)}</p>
        </li>
      );
    });

    return highScoreElements;
  };

  return (
    <div
      id="highscores-component"
      className={open === "highscores" ? "open-flex" : ""}
      ref={ref}
      data-testid="highscore-screen"
      style={{ left: screenPosition }}
      onClick={() => {
        getHighScores();
      }}
    >
      <div id="highscore-header">
        <h2 id="highscore-heading">HIGH SCORES</h2>
        <button
          id="highscore-exit-btn"
          onClick={() => {
            setOpen(null);
          }}
          data-testid="highscore-exit-btn"
        >
          X
        </button>
      </div>
      <ul id="highscore-list">{open ? createHighScores() : null}</ul>
    </div>
  );
};
