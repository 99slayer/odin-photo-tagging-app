import React, { useEffect } from "react";
import "../styles/GameHelp.css";
import useComponentVisible from "../hooks/useComponentVisible";

export const GameHelp = (props) => {
  const { isOpen, closeFunc, gamescreenPosition } = props;

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  // Closes gamehelp menu if the user clicks outside of it.
  useEffect(() => {
    if (isOpen) {
      setIsComponentVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && !isComponentVisible) {
      closeFunc("gamehelp");
    }
  }, [isComponentVisible]);

  return (
    <div
      id="gamehelp-component"
      className={isOpen ? "open-flex" : ""}
      ref={ref}
      data-testid="gamehelp-screen"
      style={{ left: gamescreenPosition }}
    >
      <div id="gamehelp-header">
        <h2 id="gamehelp-heading">GAME HELP</h2>
        <button
          id="gamehelp-exit-btn"
          onClick={() => {
            closeFunc("gamehelp");
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
