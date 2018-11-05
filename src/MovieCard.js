import React from 'react';

function MovieCard(props) {
  const { users, usersWhoLikedMovie, movieInfo } = props;

  return (
    <li className="movie-card" key={movieInfo.id}>
      <h2>{movieInfo.name}</h2>
      <h3>Liked By:</h3>

      {!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
        <p className="no-fav">None of the current users liked this movie.</p>
      ) : (
        <ul>
          {usersWhoLikedMovie &&
            usersWhoLikedMovie.map(userId => {
              return (
                <li className="user-fav" key={userId}>
                  <p>{users[userId].name}</p>
                </li>
              );
            })}
        </ul>
      )}
    </li>
  );
}

export default MovieCard;
