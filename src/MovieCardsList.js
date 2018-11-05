import React from 'react';
import MovieCard from './MovieCard';

function MovieCardsList(props) {
  const { profiles, users, movies } = props;
  const usersByMovie = {};

  profiles.forEach(profile => {
    const movieID = profile.favoriteMovieID;

    if (usersByMovie[movieID]) {
      usersByMovie[movieID].push(profile.userID);
    } else {
      usersByMovie[movieID] = [profile.userID];
    }
  });

  const movieCards = Object.keys(movies).map(id => (
    <MovieCard
      key={id}
      users={users}
      usersWhoLikedMovie={usersByMovie[id]}
      movieInfo={movies[id]}
    />
  ));

  return <ul className="movie-cards">{movieCards}</ul>
}

export default MovieCardsList;
