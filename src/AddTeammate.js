import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTeammate extends Component {
  state = {
      firstName: '',
      lastName: '',
      username: '',
      error: '',
  };

  // Map existing teammates' usernames to determine if the new username is a duplicate
  usernameExists = (username) => {
    let dup = false;
    this.props.teammates.map(teammate => {
      if(teammate.username === username) return dup = true;
    });

    return dup;
  }

  // Determine if we should display error message and update state to show our new form value
  handleInput = event => {
    const { name, value } = event.target;
    let { error } = this.state;

    if( name === 'username' ) {
      this.usernameExists(value) === true ? error = 'Username is in use' : error = '';
    }

    this.setState(() => ({
      [name]: value,
      error: error,
    }));

    event.preventDefault();
  };

  // Determine whether we can accept the new teammate or not
  //    If not, update state to display error message
  //    Else, create teammate object and pass it to AddTeammate callback
  handleSubmit = event => {
    const { firstName, lastName, username } = this.state;

    if( this.usernameExists(username) ) this.setState(() => ({ error: 'Username is in use', }))
    else {
      const teammate = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      numGames: 0,
      }

      this.props.AddTeammate(teammate);
    }

    event.preventDefault();
  }

  // Keep submit button disabled if an input is empty
  isDisabled = () => {
    const { firstName, lastName, username } = this.state;
    return firstName === ''|| lastName === '' || username === '';
  }

  render() {
    const { first, last, username, error } = this.state;

    return(
      <div className='add-teammate'>
        <h2>Join the Team!</h2>
        <form className='form-add-teammate' onSubmit={this.handleSubmit}>
          <p className='form-error'>{error}</p>
          <input
            type='text'
            value={first}
            onChange={this.handleInput}
            placeholder='First Name'
            className='input-first'
            name='firstName'
          />
          <input
            value={last}
            onChange={this.handleInput}
            placeholder='Last Name'
            className='input-last'
            name='lastName'
          />
          <input
            value={username}
            onChange={this.handleInput}
            placeholder='Username'
            className='input-username'
            name='username'
          />
          <button className="form-submit" disabled={this.isDisabled()}>Sign On</button>
        </form>
      </div>
    );
  };

}

AddTeammate.PropTypes = {
  teammates: PropTypes.array.isRequired,
  AddTeammate: PropTypes.func.isRequired,
}

export default AddTeammate;