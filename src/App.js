import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

class App extends Component {
  state = {
    users: [],
    messages: [],
  };

  addUser = user => {
    this.setState(curState => ({
      users: [...curState.users, user]
    }));
  };

  sendMessage = (owner, message) => {
    this.setState(curState => ({
      messages: [...curState.messages, { username: owner, text: message }],
    }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow key={1} messages={messages} addUser={this.addUser} sendMessage={this.sendMessage} />
          <ChatWindow key={2} messages={messages} addUser={this.addUser} sendMessage={this.sendMessage} />
        </div>
      </div>
    );
  };
};

export default App;
