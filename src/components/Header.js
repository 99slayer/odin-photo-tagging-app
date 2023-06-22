import React, { useState } from "react";
import "../styles/Header.css";
import { HighScores } from "./HighScores";
import { GameHelp } from "./GameHelp";

export const Header = () => {
  const [openHighScores, setOpenHighScores] = useState(false);
  const [openGameHelp, setOpenGameHelp] = useState(false);

  const openScreen = (btn) => {
    switch (btn) {
      case 'highscores':
        if (openHighScores) {
          break;
        } else if (openGameHelp) {
          setOpenGameHelp(false);
          setOpenHighScores(true);
          break;
        } else {
          setOpenHighScores(true);
          break;
        };

      case 'gamehelp':
        if (openGameHelp) {
          break;
        } else if (openHighScores) {
          setOpenHighScores(false);
          setOpenGameHelp(true);
          break;
        } else {
          setOpenGameHelp(true);
          break;
        };

      default:
        console.log('No case match.');
        break;
    };
  };

  const closeScreen = (btn) => {
    switch (btn) {
      case 'highscores':
        setOpenHighScores(false);
        break;
      case 'gamehelp':
        setOpenGameHelp(false);
        break;
      default:
        console.log(`ERROR: problem closing screen ${btn}.`);
    };
  };

  return (
    // should really change these id names
    <div id="header-component">
      <div id="header-cont">
        <div id="heading-cont">
          <h1 id="heading">Odin Photo Search</h1>
          <div id="header-btns">
            <button onClick={() => { openScreen('highscores') }}>High Scores</button>
            <button onClick={() => { openScreen('gamehelp') }}>Game Help</button>
          </div>
        </div>
        <div id="target-cont">
          <p>target one</p>
          <p>target two</p>
          <p>target three</p>
        </div>
        <HighScores isOpen={openHighScores} closeFunc={closeScreen} />
        <GameHelp isOpen={openGameHelp} closeFunc={closeScreen} />
      </div>
    </div>
  );
};