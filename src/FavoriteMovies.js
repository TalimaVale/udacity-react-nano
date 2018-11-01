import React, { Component } from 'react';
import MovieCard from './MovieCard';

class FavoriteMovies extends Component {
  // list of movies, list of usersWhoFavorited by movie
  
  // display movie cards
  	// MOVIE NAME
  	// USERS WHO FAVORITED
  render() {
    const { movies, users, usersByFavoriteMovie } = this.props;
  	
    const movieCards = Object.keys(movies).map(movieID => (
    	<MovieCard
          key={movieID}
          movieInfo={movies[movieID]}
          usersWhoFavorited={usersByFavoriteMovie[movieID]}
		  users={users}
  		/>
	));
    
    return <ul className="favorite-movies">{movieCards}</ul>;
  }
}

export default FavoriteMovies;