import React, { useState, useEffect } from "react";
import "../styles/Start.css";

export const Start = (props) => {
  const { setGameStart } = props;

  // Moved Start components own logic into itself <= START HERE
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setGameStart(!open);
  }, [open]);

  return (
    <div
      id="start-cont"
      className={open ? "open-flex" : "closed"}
      data-testid="start-cont"
    >
      <p id="start-text">Try and find the targets as fast as you can!</p>
      <button
        id="start-btn"
        onClick={() => {
          setOpen(false);
        }}
      >
        START
      </button>
    </div>
  );
};
