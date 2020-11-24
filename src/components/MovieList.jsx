import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    const movieCards = movies.map((dataMovie) => <MovieCard movie={dataMovie} />);
    return (
      <div className="movie-list">
        {movieCards}
      </div>
    );
  }
}

MovieList.propTypes = { data: PropTypes.arrayOf.isRequired };

export default MovieList;
