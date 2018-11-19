import React from 'react';
import GamesPlayedDisplay from './GamesPlayedDisplay';
import PropTypes from 'prop-types';

const TeammateDisplay = props => {
  const { username, numGames, showGames } = props;

  return (
    <li>
      <p className='teammate'>
        <span>{username}</span> has joined the team!
      </p>
      { showGames ? <GamesPlayedDisplay numGames={numGames}/> : '' }        
    </li>
  );
};

TeammateDisplay.PropTypes = {
  username: PropTypes.string.isRequired,
  numGames: PropTypes.number.isRequired,
  showGames: PropTypes.bool.isRequired,
}

export default TeammateDisplay;