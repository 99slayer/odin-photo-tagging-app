import React, { useState, useEffect } from "react";
import "../styles/ZoomButtons.css";

const initialPosition = 90;

export const ZoomButtons = (props) => {
  const { setImgWidth, gameStart, gameEnded } = props;

  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    setPosition(initialPosition);
  }, [gameEnded]);

  useEffect(() => {
    window.addEventListener("scroll", setY, true);
    return () => {
      window.removeEventListener("scroll", setY, true);
    };
  }, []);

  const setY = (e) => {
    let offset;

    if (window.scrollY > initialPosition) {
      offset = 0;
    } else if (window.scrollY > 0) {
      offset = Math.round(initialPosition - window.scrollY);
    } else {
      offset = initialPosition;
    }

    setPosition(offset);
  };

  const zoomIn = () => {
    if (document.getElementById("image").offsetWidth + 500 <= 5000) {
      setImgWidth(document.getElementById("image").offsetWidth + 500);
    } else {
      setImgWidth(5000);
    }
  };

  const zoomOut = () => {
    if (
      document.getElementById("image").offsetWidth - 500 <
      document.querySelector("html").clientWidth
    ) {
      setImgWidth(document.querySelector("html").clientWidth);
    } else {
      setImgWidth(document.getElementById("image").offsetWidth - 500);
    }
  };

  return (
    <div
      id="zoom-btn-cont"
      className={gameStart ? "open-flex" : "closed"}
      style={{ top: `${position}px` }}
    >
      <button
        id="zoom-in-btn"
        className="zoom-btn"
        onClick={zoomIn}
        title="zoom in"
      >
        <span>+</span>
      </button>
      <button
        id="zoom-out-btn"
        className="zoom-btn"
        onClick={zoomOut}
        title="zoom out"
      >
        <span>-</span>
      </button>
    </div>
  );
};
