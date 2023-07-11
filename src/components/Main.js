import React, { useState, useEffect } from "react";
import { GameScreen } from "./GameScreen";
import { ClickDropDown } from "./ClickDropDown";
import "../styles/Main.css";

export const Main = (props) => {
  const {
    checkImgWidth,
    zoomPosition,
    btnPosition,
    targetPosition,
    setTargetX,
    gamescreenPosition,
    setGamescreenX,
    verifyTarget,
  } = props;

  const [gameStart, setGameStart] = useState(false);
  const [imgWidth, setImgWidth] = useState(null);
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState({
    x: null,
    y: null,
  });

  // Lets the app component know if the image size changes.
  useEffect(() => {
    console.log("image was resized");
    checkImgWidth(document.querySelector("html").clientWidth, imgWidth);
  }, [imgWidth]);

  const handleMouseDown = (e) => {
    // click drop down should disappear here
    // actually it should disappear on any action other than selecting a target
    e.preventDefault();

    let mouseDown = true;
    // const hasMoved = {
    //   x: e.clientX,
    //   y: e.clientY,
    // };
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
      // Allows the user a bit of leeway when clicking a target.
      // So if they accidentally drag the mouse a little the dropdown menu will still appear.
      const withinVariance = (variance, startPos, endPos) => {
        if (endPos.x < (startPos.x + variance) && endPos.y < (startPos.y + variance)) {
          if (endPos.x > (startPos.x - variance) && endPos.y > (startPos.y - variance)) {
            return true;
          };
        };
      };
      const mouseUpPos = {
        x: e.clientX,
        y: e.clientY,
      };

      if (withinVariance(10, mouseDownPos, mouseUpPos)) {
        clickDropDown(e);
      };

      mouseDown = false;
    };

    e.target.onmouseleave = (e) => {
      mouseDown = false;
    };
  };

  const zoomIn = () => {
    if (document.getElementById("image").offsetWidth + 500 <= 5000) {
      setImgWidth(document.getElementById("image").offsetWidth + 500);
    } else {
      setImgWidth(5000);
    }

    setTargetX();
    setGamescreenX();
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

    setTargetX();
    setGamescreenX();
  };

  const clickDropDown = (e) => {
    // VVV needs to be done on any action taken VVV
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
    <div id="main-component">
      <div
        id="start-cont"
        className={gameStart ? "closed" : "open-flex"}
        data-testid="start-cont"
      >
        <p id="start-text">Try and find the targets as fast as you can!</p>
        <button
          id="start-btn"
          onClick={() => {
            setGameStart(true);
          }}
        >
          START
        </button>
      </div>
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
      <GameScreen
        gameStart={gameStart}
        btnPosition={btnPosition}
        gamescreenPosition={gamescreenPosition}
      />
      <div
        id="main-cont"
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
      <ClickDropDown
        displayDropDown={displayDropDown}
        dropDownPosition={dropDownPosition}
        verifyTarget={verifyTarget}
      />
    </div>
  );
};
