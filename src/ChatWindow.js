import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageHistory from './MessageHistory';
import SendMessage from './SendMessage';

class ChatWindow extends Component {
  state = {
    usernameInput: '',
    hasUser: false,
    owner: '',
  };

  handleInput = event => {
    const { value } = event.target;

    this.setState(() => ({
      usernameInput: value,
    }));
  };

  onSubmit = event => {
    event.preventDefault();

    this.setState(curState => ({
      owner: curState.usernameInput,
      hasUser: true,
    }));

    this.props.addUser(this.state.usernameInput);
  };

  isDisabled = query => {
    return query === '' ? true : false;
  };

  sendMessage = message => {
    const { owner } = this.state;

    this.props.sendMessage(owner, message);
  };

  render() {
    const { messages } = this.props;
    const { usernameInput, hasUser, owner } = this.state;

    return(
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        {hasUser ? (
          <div>
            <div className="name sender">{owner}</div>

            <MessageHistory messages={messages} owner={owner} />
            <SendMessage isDisabled={this.isDisabled} sendMessage={this.sendMessage} />
          </div>
        ) : (
          <div>
            <h2>Who are you?</h2>
            <div>
              <form className="input-group" name='usernameSubmit' onSubmit={this.onSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name..."
                  name="usernameInput"
                  value={usernameInput}
                  onChange={this.handleInput}
                />
                <div className="input-group-append">
                  <button
                    className="btn submit-button"
                    name="usernameInput"
                    disabled={this.isDisabled(usernameInput)} >
                    LOG IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };
};

ChatWindow.propTypes = {
  addUser: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default ChatWindow;