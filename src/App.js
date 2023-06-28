import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  const [changeWidth, setChangeWidth] = useState(false);
  // setting the image min-width to 100% solved my issue
  useEffect(() => {
    window.onresize = () => {
      if (document.getElementById('app-component').offsetWidth < document.querySelector('html').clientWidth) {
        setChangeWidth(false);
      } else if (document.getElementById('app-component').offsetWidth < document.getElementById('image').offsetWidth) {
        setChangeWidth(true);
      };
      console.log('window was resized');
    }
  })

  const checkImgWidth = (windowWidth, imageWidth) => {
    if (imageWidth > windowWidth) {
      setChangeWidth(true);
    } else if (imageWidth <= windowWidth) {
      setChangeWidth(false);
    };
  };

  return (
    <div id='app-component' className={changeWidth ? 'app-max' : ''}>
      <Header />
      <Main checkImgWidth={checkImgWidth} />
      <Footer />
    </div>
  );
};

export default App;
