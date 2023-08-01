import React, { useState, useEffect } from "react";
import "../styles/Targets.css";

const initialPosition = 90;

export const Targets = (props) => {
  const { appWidth, gameStart, gameEnded, hits } = props;

  const [position, setPosition] = useState({
    x: null,
    y: initialPosition,
  });

  useEffect(() => {
    setPosition({
      x: null,
      y: initialPosition,
    });
  }, [gameEnded]);

  useEffect(() => {
    setX();
  }, [appWidth, gameStart]);

  useEffect(() => {
    window.addEventListener("resize", setX, true);
    window.addEventListener("scroll", setY, true);
    return () => {
      window.removeEventListener("resize", setX, true);
      window.removeEventListener("scroll", setY, true);
    };
  }, []);

  const setX = (e) => {
    setPosition((prev) => ({
      ...prev,
      x:
        (document.querySelector("html").clientWidth -
          document.getElementById("target-cont").offsetWidth) /
        2,
    }));
  };

  const setY = (e) => {
    let offset;

    if (window.scrollY > initialPosition) {
      offset = 0;
    } else if (window.scrollY > 0) {
      offset = Math.round(initialPosition - window.scrollY);
    } else {
      offset = initialPosition;
    }

    setPosition((prev) => ({
      ...prev,
      y: offset,
    }));
  };

  return (
    <div
      id="target-cont"
      className={gameStart ? "open-flex" : "closed"}
      data-testid={"target-cont"}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className={`${hits.targetOne ? "wasHit" : ""} target`}>
        Noah&apos;s Ark
      </div>
      <div className={`${hits.targetTwo ? "wasHit" : ""} target`}>
        Loch Ness Monster
      </div>
      <div className={`${hits.targetThree ? "wasHit" : ""} target`}>
        Giant Spider
      </div>
    </div>
  );
};
