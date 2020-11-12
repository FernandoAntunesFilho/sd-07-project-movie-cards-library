// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const listMovies = this.props.movies;
    return (
      <div>
        {listMovies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}
export default MovieList;

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };