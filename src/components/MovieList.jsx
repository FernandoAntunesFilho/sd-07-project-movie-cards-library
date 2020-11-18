// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        { movies.map((movie) => <MovieCard movie={movie} key={movie.title} />) }
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.shape()).isRequired };

export default MovieList;
