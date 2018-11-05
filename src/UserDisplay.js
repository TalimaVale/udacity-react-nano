import React, { Component } from 'react';

class UserDisplay extends Component {
  render() {
    const { user } = this.props;
    return <li key={user.id}>{user.name} <em>({user.userName})</em> has favorited this movie</li>;
  }
}

export default UserDisplay;