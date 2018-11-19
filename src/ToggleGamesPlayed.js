import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleGamesPlayed extends Component {
  toggleDisplay = () => {
    this.props.toggleGamesDisplay();
  }

  render() {
    return (
      <button className='toggle-games' onClick={this.toggleDisplay}>
        - {this.props.gamesDisplayed ? 'Hide ' : 'Show '} Games Played -
      </button>
    );
  };
}

ToggleGamesPlayed.PropTypes = {
  gamesDisplayed: PropTypes.bool.isRequired,
  toggleDisplay: PropTypes.func.isRequired,
}

export default ToggleGamesPlayed;