import React, { useState, useEffect } from "react";
import { Start } from "./Start";
import { ZoomButtons } from "./ZoomButtons";
import { Targets } from "./Targets";
import { GameScreen } from "./GameScreen";
import { Image } from "./Image";
import { ClickDropDown } from "./ClickDropDown";
import "../styles/Main.css";

export const Main = (props) => {
  const { changeWidth, checkImgWidth, gameStart, setGameStart, verifyTarget } =
    props;

  const [imgWidth, setImgWidth] = useState(null);
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const [gamescreenOpen, setGamescreenOpen] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState({
    x: null,
    y: null,
  });

  // Lets the app component know if the image size changes.
  useEffect(() => {
    checkImgWidth(document.querySelector("html").clientWidth, imgWidth);
  }, [imgWidth]);

  // Closes dropdown if you click anywhere outside of the image.
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target !== document.getElementById("image")) {
        setDisplayDropDown(false);
      }
    });
  }, []);

  return (
    <div id="main-component" data-testid="main-component">
      <Start setGameStart={setGameStart} />
      <ZoomButtons setImgWidth={setImgWidth} gameStart={gameStart} />
      <Targets changeWidth={changeWidth} gameStart={gameStart} />
      <GameScreen
        changeWidth={changeWidth}
        gameStart={gameStart}
        setGamescreenOpen={setGamescreenOpen}
      />
      <Image
        gameStart={gameStart}
        imgWidth={imgWidth}
        gamescreenOpen={gamescreenOpen}
        displayDropDown={displayDropDown}
        setDisplayDropDown={setDisplayDropDown}
        setDropDownPosition={setDropDownPosition}
      />
      <ClickDropDown
        displayDropDown={displayDropDown}
        dropDownPosition={dropDownPosition}
        verifyTarget={verifyTarget}
      />
    </div>
  );
};
