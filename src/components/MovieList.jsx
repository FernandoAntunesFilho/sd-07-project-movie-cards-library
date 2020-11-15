import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieListComponent extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map((movie) =>
        <MovieCard movie={movie} key={movie.title} />,
      )
    );
  }
}

MovieListComponent.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieListComponent;
