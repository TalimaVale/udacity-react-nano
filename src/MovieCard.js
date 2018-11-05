import React, { Component } from 'react';
import UserDisplay from './UserDisplay';

class MovieCard extends Component {
  render() {
    const { movieInfo, usersWhoFavorited, users } = this.props;

    let content = [];
    if (usersWhoFavorited) {
      content = <ul>
        {usersWhoFavorited.map(userID => (
          <UserDisplay key={userID} user={users[userID]} />
        ))}
      </ul>
    } else {
      content = <p className="not-fav">This is not a favorite movie</p>;
    }

    return (
      <li className="movie-li" key={movieInfo.id}>
        <h3 className="movie-title">{movieInfo.name}</h3>
        {content}
      </li>
    );
  }
}

export default MovieCard;