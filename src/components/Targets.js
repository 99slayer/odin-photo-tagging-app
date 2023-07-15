import React from "react";
import "../styles/Targets.css";

export const Targets = (props) => {
  const { gameStart, targetPosition } = props;

  return (
    <div
      id="target-cont"
      className={gameStart ? "open-flex" : "closed"}
      style={{
        left: `${targetPosition.x}px`,
        top: `${targetPosition.y}px`,
      }}
    >
      <div className="target">Pick Chameleon</div>
      <div className="target">Donkey Wearing a Hat</div>
      <div className="target">Black and White Cat</div>
    </div>
  );
};
