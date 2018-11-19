import React, { Component } from 'react';
import AddTeammate from './AddTeammate';
import TeammatesBoard from './TeammatesBoard';

class TeamTalimaTeammates extends Component {
  state = {
      teammates: [],
  };

  // Update state to add new teammate to state.teammates array
  AddTeammate = teammate => {
    this.setState(curState => ({
      teammates: [...curState.teammates, teammate]
    }));
  }

  render() {
    const { teammates } = this.state;

    return(
      <div className='teamtalima-teammates'>
        <AddTeammate AddTeammate={this.AddTeammate} teammates={teammates} />
        <TeammatesBoard teammates={teammates} />
      </div>
    );
  };
}

export default TeamTalimaTeammates;