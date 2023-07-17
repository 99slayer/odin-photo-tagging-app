import React, { useState, useEffect } from "react";
import "../styles/GameHelp.css";
import useComponentVisible from "../hooks/useComponentVisible";

export const GameHelp = (props) => {
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

  // Closes gamehelp menu if the user clicks outside of it.
  useEffect(() => {
    if (open === "gamehelp") {
      setIsComponentVisible(true);
    }
  }, [open]);

  useEffect(() => {
    if (open === "gamehelp" && !isComponentVisible) {
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
      id="gamehelp-component"
      className={open === "gamehelp" ? "open-flex" : ""}
      ref={ref}
      data-testid="gamehelp-screen"
      style={{ left: screenPosition }}
    >
      <div id="gamehelp-header">
        <h2 id="gamehelp-heading">GAME HELP</h2>
        <button
          id="gamehelp-exit-btn"
          onClick={() => {
            setOpen(null);
          }}
          data-testid="gamehelp-exit-btn"
        >
          X
        </button>
      </div>
      <div id="gamehelp-info">
        <p>PLACEHOLDER</p>
      </div>
    </div>
  );
};
