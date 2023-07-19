import React from "react";
import "../styles/ClickDropDown.css";
import { coordinates } from "../coordinates";

export const ClickDropDown = (props) => {
  const { displayDropDown, dropDownPosition, verifyTarget } = props;

  const dropdownConvert = (x) => {
    const imageSize = {
      width: document.getElementById("image").offsetWidth,
      height: document.getElementById("image").offsetHeight,
    };

    return coordinates.convert(x, imageSize);
  };

  return (
    <div
      id="click-drop-down-component"
      className={displayDropDown ? "open-flex" : "close"}
      data-testid="drop-down"
      style={{
        top: dropDownPosition.y - 60 / 2 - 80,
        left: dropDownPosition.x - 60 / 2,
      }}
    >
      <div id="box"></div>
      <div id="drop-down">
        <button
          className="drop-down-btn"
          onClick={() => {
            verifyTarget(dropdownConvert(dropDownPosition), "chameleon");
          }}
        >
          Chameleon
        </button>

        <button
          className="drop-down-btn"
          onClick={() => {
            verifyTarget(dropdownConvert(dropDownPosition), "donkey");
          }}
        >
          Donkey
        </button>

        <button
          className="drop-down-btn"
          onClick={() => {
            verifyTarget(dropdownConvert(dropDownPosition), "cat");
          }}
        >
          Cat
        </button>
      </div>
    </div>
  );
};
