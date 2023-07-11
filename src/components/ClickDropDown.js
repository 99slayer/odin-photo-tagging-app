import React from "react";
import "../styles/ClickDropDown.css";
import { coordinates } from "../coordinates";

export const ClickDropDown = (props) => {
  const { displayDropDown, dropDownPosition, verifyTarget } = props;

  return (
    <div
      id="click-drop-down-component"
      className={displayDropDown ? "open-flex" : "close"}
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
            verifyTarget(
              coordinates.convert(dropDownPosition, {
                width: document.getElementById("image").offsetWidth,
                height: document.getElementById("image").offsetHeight,
              }),
              "chameleon"
            );
          }}
        >
          Chameleon
        </button>

        <button
          className="drop-down-btn"
          onClick={() => {
            verifyTarget(
              coordinates.convert(dropDownPosition, {
                width: document.getElementById("image").offsetWidth,
                height: document.getElementById("image").offsetHeight,
              }),
              "donkey"
            );
          }}
        >
          Donkey
        </button>

        <button
          className="drop-down-btn"
          onClick={() => {
            verifyTarget(
              coordinates.convert(dropDownPosition, {
                width: document.getElementById("image").offsetWidth,
                height: document.getElementById("image").offsetHeight,
              }),
              "cat"
            );
          }}
        >
          Cat
        </button>
      </div>
    </div>
  );
};
