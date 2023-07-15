import React from "react";
import "../styles/Image.css";

export const Image = (props) => {
  const {
    gameStart,
    imgWidth,
    gamescreenOpen,
    displayDropDown,
    setDisplayDropDown,
    setDropDownPosition,
  } = props;

  const handleMouseDown = (e) => {
    e.preventDefault();

    let mouseDown = true;
    const mouseDownPos = {
      x: e.clientX,
      y: e.clientY,
    };
    const movePos = {
      x: e.pageX,
      y: e.pageY,
    };

    e.target.onmousemove = (e) => {
      if (mouseDown) {
        window.scrollTo(
          Math.round(window.scrollX + (movePos.x - e.pageX)),
          Math.round(window.scrollY + (movePos.y - e.pageY))
        );
        movePos.x = e.pageX;
        movePos.y = e.pageY;
      }
    };

    e.target.onmouseup = (e) => {
      // Allows the user a bit of leeway when opening the target dropdown.
      const withinVariance = (variance, startPos, endPos) => {
        if (
          endPos.x < startPos.x + variance &&
          endPos.y < startPos.y + variance
        ) {
          if (
            endPos.x > startPos.x - variance &&
            endPos.y > startPos.y - variance
          ) {
            return true;
          }
        }
      };
      const mouseUpPos = {
        x: e.clientX,
        y: e.clientY,
      };

      if (withinVariance(10, mouseDownPos, mouseUpPos)) {
        openDropDown(e);
      }

      mouseDown = false;
    };

    e.target.onmouseleave = (e) => {
      mouseDown = false;
    };
  };

  const openDropDown = (e) => {
    if (gamescreenOpen) {
      return;
    }

    if (displayDropDown) {
      setDisplayDropDown(false);
      return;
    }

    const clickCoordinates = {
      x: e.pageX,
      y: e.pageY,
    };

    setDisplayDropDown(true);
    setDropDownPosition({
      x: clickCoordinates.x,
      y: clickCoordinates.y,
    });
  };

  return (
    <div
      id="image-cont"
      className={gameStart ? "open-flex" : "closed"}
      data-testid="main-cont"
    >
      <img
        src="Cutiezor.png"
        id="image"
        style={{ width: imgWidth }}
        draggable="true"
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};
