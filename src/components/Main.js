import React, { useState, useEffect } from "react";
import "../styles/Main.css";

// let dragging = false;
// const movePos = {
//   x: null,
//   y: null,
// }

export const Main = (props) => {
  const { checkImgWidth, zoomPosition } = props;

  const [gameStart, setGameStart] = useState(false);
  const [imgWidth, setImgWidth] = useState(null);

  // lets the app component know if the image size changes.
  useEffect(() => {
    console.log('image was resized');
    checkImgWidth(document.querySelector('html').clientWidth, imgWidth);
  }, [imgWidth]);

  const imageDrag = (e) => {
    e.preventDefault();

    let mouseDown = true;
    let movePos = {
      x: e.pageX,
      y: e.pageY,
    };

    e.target.onmousemove = (e) => {
      if (mouseDown) {
        window.scrollTo(Math.round(window.scrollX + (movePos.x - e.pageX)), Math.round(window.scrollY + (movePos.y - e.pageY)));
        movePos.x = e.pageX;
        movePos.y = e.pageY;
      };
    };

    e.target.onmouseup = (e) => {
      mouseDown = false;
    };

    e.target.onmouseleave = (e) => {
      mouseDown = false;
    };
  };

  const zoomIn = () => {
    if ((document.getElementById('image').offsetWidth + 500) <= 5000) {
      setImgWidth(document.getElementById('image').offsetWidth + 500);
    } else {
      setImgWidth(5000);
    };
  };

  const zoomOut = () => {
    if ((document.getElementById('image').offsetWidth - 500) < document.querySelector('html').clientWidth) {
      setImgWidth('100%');
    } else {
      setImgWidth(document.getElementById('image').offsetWidth - 500);
    };
  };

  const getClickCoordinates = (e) => {
    // default height: 1952px
    // default width: 3030px
    // Pink Chameleon: width: 1414 - 1455 / height: 1908 - 1967
    // Donkey Wearing a Hat: width: 1300 - 1376 / height: 1058 - 1151
    // Black and White Cat: width: 1439 - 1492 / height: 999 - 1065
    console.log('current image dimensions');
    console.log(`width: ${e.target.offsetWidth}`);
    console.log(`height: ${e.target.offsetHeight}`);
    console.log('----------------------------------');
    console.log('current window (minus scroll bar) dimensions')
    console.log(`width: ${document.querySelector('html').clientWidth}`);
    console.log(`height: ${document.querySelector('html').clientHeight}`);
    console.log('----------------------------------');
    console.log('click coordinates');
    // browser window
    // console.log(`X: ${e.clientX}`);
    // console.log(`Y: ${e.clientY}`);
    // entire page
    console.log(`X: ${e.pageX}`);
    console.log(`Y: ${e.pageY}`);
    console.log('----------------------------------');
  };

  return (
    <div id="main-component">
      <div id="start-cont" className={gameStart ? 'closed' : 'open-flex'} data-testid="start-cont">
        <p>GAME INSTRUCTIONS PLACEHOLDER</p>
        <button id="main-start-btn" onClick={() => { setGameStart(true) }}>START</button>
      </div>
      <div id="target-cont">
        <div>Pick Chameleon</div>
        <div>Donkey Wearing a Hat</div>
        <div>Black and White Cat</div>
      </div>
      <div id="zoom-btn-cont" style={{ top: `${zoomPosition}px` }} >
        <button id="zoom-in-btn" className="zoom-btn" onClick={zoomIn}>+</button>
        <button id="zoom-out-btn" className="zoom-btn" onClick={zoomOut}>-</button>
      </div>
      <div id="main-cont" className={gameStart ? 'open-flex' : 'closed'} data-testid="main-cont">
        <img src="Cutiezor.png" id="image" style={{ width: imgWidth }} draggable="true" onMouseDown={imageDrag} />
      </div>
    </div>
  );
};