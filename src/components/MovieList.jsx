import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const moviesList = movies.map((movie) => <MovieCard movie={movie} key={movie.title} />);
    return (
      <ul>
        {moviesList}
      </ul>
    );
  }
}

export default MovieList;
