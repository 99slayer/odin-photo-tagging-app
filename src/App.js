import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const [changeWidth, setChangeWidth] = useState(false);
  const [zoomPosition, setZoomPosition] = useState(80);
  const [btnPosition, setBtnPosition] = useState({
    x: document.querySelector("html").clientWidth - 60,
    y: 80,
  });
  const [targetPosition, setTargetPosition] = useState({
    x: null,
    y: 80,
  });

  useEffect(() => {
    // Changes the app components width value depending on different element sizes.
    // Also repositions the target and gamescreen btn elements on window resize.
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

      setBtnX();
      setTargetX();
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

  // Keeps target element centered on window resize or zoom level change
  const setTargetX = () => {
    setTargetPosition((prev) => ({
      ...prev,
      x:
        (document.querySelector("html").clientWidth -
          document.getElementById("target-cont").offsetWidth) /
        2,
    }));
  };

  const setBtnX = () => {
    if (
      Math.round(document.querySelector("body").clientHeight) >
      Math.round(window.innerHeight)
    ) {
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

  const checkImgWidth = (windowWidth, imageWidth) => {
    if (imageWidth > windowWidth) {
      setChangeWidth(true);
    } else if (imageWidth <= windowWidth) {
      setChangeWidth(false);
    }
  };

  return (
    <div id="app-component" className={changeWidth ? "app-max" : ""}>
      <Header />
      <Main
        checkImgWidth={checkImgWidth}
        zoomPosition={zoomPosition}
        btnPosition={btnPosition}
        targetPosition={targetPosition}
        setTargetX={setTargetX}
      />
      <Footer />
    </div>
  );
}

export default App;
