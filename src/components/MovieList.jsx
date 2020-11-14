import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

MovieList.propTypes = { movies: PropTypes.array }.isRequired;

export default MovieList;
