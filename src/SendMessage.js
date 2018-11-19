import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
  state = {
    messageInput: '',
  };

  handleInput = event => {
    const { value } = event.target;

    this.setState(() => ({
      messageInput: value,
    }));
  };

  onSubmit = event => {
    const { messageInput } = this.state;
    event.preventDefault();

    this.props.sendMessage(messageInput);

    this.setState(() => ({
      messageInput: '',
    }));
  };

  render() {
    const { isDisabled } = this.props;
    const { messageInput } = this.state;

    return (
      <div>
        <form className="input-group" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            name='messageInput'
            value={messageInput}
            onChange={this.handleInput}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={isDisabled(messageInput)}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  };
};

SendMessage.propTypes = {
  isDisabled: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default SendMessage;