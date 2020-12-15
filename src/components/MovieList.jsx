import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map(() => <MovieCard />)
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
