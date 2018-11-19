import React, { Component } from 'react';
import ToggleGamesPlayed from './ToggleGamesPlayed';
import TeammateDisplay from './TeammateDisplay';
import PropTypes from 'prop-types';

class TeammatesBoard extends Component {
  state = {
    showGames: true,
  }

  // Update state to set current display status
  toggleGamesDisplay = () => {
    this.setState(prevState => ({
      showGames: !prevState.showGames,
    }));
  }

  render(){
    const { showGames } = this.state;
    const { teammates } = this.props;

    return(
      <div className='teammates-board'>
        <ToggleGamesPlayed toggleGamesDisplay={this.toggleGamesDisplay} gamesDisplayed={showGames}/>
        <h2 className='board-title'>Our Teammates:</h2>
        <ol className='teammate-list'>
        {teammates.map(teammate => (
          <TeammateDisplay key={teammate.username} username={teammate.username} showGames={showGames} numGames={teammate.numGames}/>
        ))}
        </ol>
        
      </div>
    );
  };
}

TeammatesBoard.PropTypes = {
  teammates: PropTypes.array.isRequired,
}

export default TeammatesBoard;