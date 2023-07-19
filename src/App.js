import React, { useState } from "react";
import "./styles/App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const [appWidth, setAppWidth] = useState(false);

  const changeAppWidth = (windowWidth, imageWidth) => {
    if (imageWidth > windowWidth) {
      setAppWidth(true);
    } else if (imageWidth <= windowWidth) {
      setAppWidth(false);
    }
  };

  return (
    <div id="app-component" className={appWidth ? "app-max" : ""}>
      <Header />
      <Main appWidth={appWidth} changeAppWidth={changeAppWidth} />
      <Footer />
    </div>
  );
}

export default App;
