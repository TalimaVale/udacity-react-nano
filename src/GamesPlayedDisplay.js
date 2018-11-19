import React from 'react';
import PropTypes from 'prop-types';

const GamesPlayedDisplay = props => {
    return <p className='games-played'>Games played: {props.numGames}</p>;
}

GamesPlayedDisplay.PropTypes = {
  numGames: PropTypes.instanceOf.isRequired,
}

export default GamesPlayedDisplay;