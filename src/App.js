import React, { useState } from "react";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const [changeWidth, setChangeWidth] = useState(false);

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
        changeWidth={changeWidth}
        checkImgWidth={checkImgWidth}
      />
      <Footer />
    </div>
  );
}

export default App;
