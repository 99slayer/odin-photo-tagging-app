import React from "react";
import "../styles/ClickDropDown.css";

export const ClickDropDown = (props) => {
  const { displayDropDown, dropDownPosition } = props;

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
        <button className="drop-down-btn">Chameleon</button>
        <button className="drop-down-btn">Donkey</button>
        <button className="drop-down-btn">Cat</button>
      </div>
    </div>
  );
};
