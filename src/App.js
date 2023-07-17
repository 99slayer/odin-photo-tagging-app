import React, { useState } from "react";
import "./styles/App.css";
import { coordinates } from "./coordinates";
import { targetPositions } from "./targetPositions";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const [changeWidth, setChangeWidth] = useState(false);
  const [gameStart, setGameStart] = useState(false);

  const checkImgWidth = (windowWidth, imageWidth) => {
    if (imageWidth > windowWidth) {
      setChangeWidth(true);
    } else if (imageWidth <= windowWidth) {
      setChangeWidth(false);
    }
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
        changeWidth={changeWidth}
        checkImgWidth={checkImgWidth}
        gameStart={gameStart}
        setGameStart={setGameStart}
        verifyTarget={verifyTarget}
      />
      <Footer />
    </div>
  );
}

export default App;
