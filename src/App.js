import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { coordinates } from "./coordinates";
import { targetPositions } from "./targetPositions";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const [changeWidth, setChangeWidth] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [zoomPosition, setZoomPosition] = useState(80);
  const [btnPosition, setBtnPosition] = useState({
    x: document.querySelector("html").clientWidth - 60,
    y: 80,
  });
  const [targetPosition, setTargetPosition] = useState({
    x: null,
    y: 80,
  });
  const [gamescreenPosition, setGamescreenPosition] = useState(
    (document.querySelector("html").clientWidth -
      document.querySelector("html").clientWidth * 0.7) /
      2
  );

  useEffect(() => {
    setX();
  }, [changeWidth, gameStart]);

  useEffect(() => {
    // Changes the app components width value depending on different element sizes.
    // Also repositions various elements on window resize.
    window.onresize = () => {
      if (
        document.getElementById("app-component").offsetWidth <
        document.querySelector("html").clientWidth
      ) {
        setChangeWidth(false);
      } else if (
        document.getElementById("app-component").offsetWidth <
        document.getElementById("image").offsetWidth
      ) {
        setChangeWidth(true);
      }

      setX();
    };

    // Changes zoom button, target, and gamescreenbtn top values, based on how much the user has scrolled in the y axis.
    window.onscroll = (e) => {
      const headerHeight = 80;
      const topPadding = 0;
      let headerOffset;

      if (window.scrollY > headerHeight) {
        headerOffset = topPadding;
      } else if (window.scrollY > 0) {
        headerOffset = Math.round(headerHeight - window.scrollY);
      }

      setZoomPosition(headerOffset);
      setTargetPosition((prev) => ({
        ...prev,
        y: headerOffset,
      }));

      setBtnPosition((prev) => ({
        ...prev,
        y: headerOffset,
      }));
    };
  });

  // Centers target element along the x axis.
  const setTargetX = () => {
    if (document.getElementById("target-cont").offsetWidth === 0) {
      return;
    }

    setTargetPosition((prev) => ({
      ...prev,
      x:
        (document.querySelector("html").clientWidth -
          document.getElementById("target-cont").offsetWidth) /
        2,
    }));
  };

  // Centers gamescreen element along the x axis.
  const setGamescreenX = () => {
    setGamescreenPosition(
      (document.querySelector("html").clientWidth -
        document.querySelector("html").clientWidth * 0.7) /
        2
    );
  };

  // Centers gamescreen buttons along the x axis.
  const setBtnX = () => {
    if (document.querySelector("body").clientHeight > window.innerHeight) {
      setBtnPosition((prev) => ({
        ...prev,
        x:
          window.innerWidth -
          (60 +
            (window.innerWidth - document.querySelector("html").clientWidth)),
      }));
    } else {
      setBtnPosition((prev) => ({
        ...prev,
        x: document.querySelector("html").clientWidth - 60,
      }));
    }
  };

  const setX = () => {
    setTargetX();
    setGamescreenX();
    setBtnX();
  };

  const checkImgWidth = (windowWidth, imageWidth) => {
    if (imageWidth > windowWidth) {
      setChangeWidth(true);
    } else if (imageWidth <= windowWidth) {
      setChangeWidth(false);
    }
    console.log("image checked");
  };

  const verifyTarget = (coords, target) => {
    switch (target) {
      case "chameleon":
        console.log(coordinates.validate(targetPositions.chameleon, coords));
        break;

      case "donkey":
        console.log(coordinates.validate(targetPositions.donkey, coords));
        break;

      case "cat":
        console.log(coordinates.validate(targetPositions.cat, coords));
        break;

      default:
        console.error("Invalid target parameter.");
        break;
    }
  };

  return (
    <div id="app-component" className={changeWidth ? "app-max" : ""}>
      <Header />
      <Main
        checkImgWidth={checkImgWidth}
        gameStart={gameStart}
        setGameStart={setGameStart}
        zoomPosition={zoomPosition}
        btnPosition={btnPosition}
        targetPosition={targetPosition}
        gamescreenPosition={gamescreenPosition}
        verifyTarget={verifyTarget}
      />
      <Footer />
    </div>
  );
}

export default App;
