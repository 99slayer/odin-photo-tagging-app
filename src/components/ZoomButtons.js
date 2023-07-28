import React, { useState, useEffect } from "react";
import "../styles/ZoomButtons.css";

export const ZoomButtons = (props) => {
  const { setImgWidth, gameStart, gameEnded } = props;

  const [position, setPosition] = useState(80);

  useEffect(() => {
    setPosition(80);
  }, [gameEnded]);

  useEffect(() => {
    window.addEventListener("scroll", setY, true);
    return () => {
      window.removeEventListener("scroll", setY, true);
    };
  }, []);

  const setY = (e) => {
    const headerHeight = 80;
    let headerOffset;

    if (window.scrollY > headerHeight) {
      headerOffset = 0;
    } else if (window.scrollY > 0) {
      headerOffset = Math.round(headerHeight - window.scrollY);
    }

    setPosition(headerOffset);
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
      <button id="zoom-in-btn" className="zoom-btn" onClick={zoomIn}>
        <span>+</span>
      </button>
      <button id="zoom-out-btn" className="zoom-btn" onClick={zoomOut}>
        <span>-</span>
      </button>
    </div>
  );
};
