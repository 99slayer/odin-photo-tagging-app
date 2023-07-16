import React from "react";
import "../styles/ZoomButtons.css";

export const ZoomButtons = (props) => {
  const { setImgWidth, gameStart, zoomPosition } = props;

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
      setImgWidth("100%");
    } else {
      setImgWidth(document.getElementById("image").offsetWidth - 500);
    }
  };

  return (
    <div
      id="zoom-btn-cont"
      className={gameStart ? "open-flex" : "closed"}
      style={{ top: `${zoomPosition}px` }}
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
