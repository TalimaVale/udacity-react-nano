import React from 'react';
import PropTypes from 'prop-types';

const MessageHistory = props => {
  const { messages, owner } = props;

  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={index}
          className={ message.username === owner ? 'message sender' : 'message recipient' }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
};

MessageHistory.propTypes = {
  messages: PropTypes.array.isRequired,
  owner: PropTypes.string.isRequired,
}

export default MessageHistory;