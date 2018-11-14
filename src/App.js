import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    myVoice: '',
  }

  speaking = (input) => {
    this.setState (() => ({
      myVoice: input
    }))
  }

  render() {
    const { myVoice } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={myVoice}
            onChange={(event) => this.speaking(event.target.value)}
          />
          <p className="echo">Echo:</p>
          <p className="my-voice">{myVoice}</p>
        </div>
      </div>
    );
  }
}

export default App;
