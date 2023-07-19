import React, { useState, useEffect } from "react";
import "../styles/Targets.css";

export const Targets = (props) => {
  const { appWidth, gameStart } = props;

  const [position, setPosition] = useState({
    x: null,
    y: 80,
  });

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
    const headerHeight = 80;
    let headerOffset;

    if (window.scrollY > headerHeight) {
      headerOffset = 0;
    } else if (window.scrollY > 0) {
      headerOffset = Math.round(headerHeight - window.scrollY);
    }

    setPosition((prev) => ({
      ...prev,
      y: headerOffset,
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
      <div className="target">Pick Chameleon</div>
      <div className="target">Donkey Wearing a Hat</div>
      <div className="target">Black and White Cat</div>
    </div>
  );
};
