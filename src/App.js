import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/** top header */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <div className="game">
          {/** title */}
          <h2>Talimental Math</h2>

          {/** game */}
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
