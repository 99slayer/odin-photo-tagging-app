import React from 'react';
import './styles/App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <div id='app-component'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
