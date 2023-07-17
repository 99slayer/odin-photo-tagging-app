import React, { useState, useEffect } from "react";
import "../styles/HighScores.css";
import useComponentVisible from "../hooks/useComponentVisible";

export const HighScores = (props) => {
  const { open, setOpen } = props;

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [screenPosition, setScreenPosition] = useState(
    (document.querySelector("html").clientWidth -
      document.querySelector("html").clientWidth * 0.7) /
      2
  );

  useEffect(() => {
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

  return (
    <div
      id="highscores-component"
      className={open === "highscores" ? "open-flex" : ""}
      ref={ref}
      data-testid="highscore-screen"
      style={{ left: screenPosition }}
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
      <ul>{/* highscores */}</ul>
    </div>
  );
};
