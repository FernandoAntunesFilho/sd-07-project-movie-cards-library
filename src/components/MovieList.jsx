import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import './MovieList.css';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className="movieList">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes
  .arrayOf(PropTypes
    .objectOf([PropTypes.string, PropTypes.number]))
    .isRequired,
};

export default MovieList;
