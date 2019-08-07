import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.js';
import './css/styles.css';
import './js/index.js';



import { Header } from './components/Header/Header.js';
import { left_menu } from './components/Header/index.js';

function App() {
  let menu;

  return (
    <Header/>
  );
}

export default App;
