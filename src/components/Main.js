import React, { useState, useEffect } from "react";
import "../styles/Main.css";
import { Start } from "./Start";
import { ZoomButtons } from "./ZoomButtons";
import { Targets } from "./Targets";
import { GameScreen } from "./GameScreen";
import { Image } from "./Image";
import { ClickDropDown } from "./ClickDropDown";
import { EndScreen } from "./EndScreen";
import { coordinates } from "../coordinates";
import { getTarget } from "../firebase-config";

export const Main = (props) => {
  const { appWidth, setAppWidth, changeAppWidth } = props;

  const [gameStart, setGameStart] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [imgWidth, setImgWidth] = useState(null);
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const [gamescreenOpen, setGamescreenOpen] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState({
    x: null,
    y: null,
  });
  const [hits, setHits] = useState({
    targetOne: false,
    targetTwo: false,
    targetThree: false,
  });

  useEffect(() => {
    if (Object.keys(hits).every((x) => hits[x] === true)) {
      console.info("Game ended.");
      endGame();
    }
  }, [hits]);

  // Lets the App component know if the image size changes.
  useEffect(() => {
    changeAppWidth(document.querySelector("html").clientWidth, imgWidth);
  }, [imgWidth]);

  // Closes dropdown if you click anywhere outside of the image.
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target !== document.getElementById("image")) {
        setDisplayDropDown(false);
      }
    });
  }, []);

  const verifyTarget = async (coords, target) => {
    let isHit = await coordinates.validate(getTarget(`${target}`), coords);

    console.log(isHit);

    if (isHit) {
      switch (target) {
        case "Chameleon":
          if (hits.targetOne) {
            break;
          }

          setHits((prev) => ({
            ...prev,
            targetOne: true,
          }));
          break;

        case "Donkey":
          if (hits.targetTwo) {
            break;
          }

          setHits((prev) => ({
            ...prev,
            targetTwo: true,
          }));
          break;

        case "Cat":
          if (hits.targetThree) {
            break;
          }

          setHits((prev) => ({
            ...prev,
            targetThree: true,
          }));
          break;

        default:
          console.error("Invalid target parameter.");
          break;
      }
    }
  };

  const endGame = () => {
    setAppWidth(false);
    setGameStart(false);
    setGameEnded(true);
  };

  const resetGame = () => {
    setGameStart(true);
    setGameEnded(false);
    setHits({
      targetOne: false,
      targetTwo: false,
      targetThree: false,
    });
  };

  return (
    <div id="main-component" data-testid="main-component">
      <Start setGameStart={setGameStart} />
      <ZoomButtons
        setImgWidth={setImgWidth}
        gameStart={gameStart}
        gameEnded={gameEnded}
      />
      <Targets
        appWidth={appWidth}
        gameStart={gameStart}
        gameEnded={gameEnded}
        hits={hits}
      />
      <GameScreen
        appWidth={appWidth}
        gameStart={gameStart}
        gameEnded={gameEnded}
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
      <EndScreen gameEnded={gameEnded} resetGame={resetGame} />
    </div>
  );
};
