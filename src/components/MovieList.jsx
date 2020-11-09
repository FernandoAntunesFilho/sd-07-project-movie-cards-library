// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        { movies.map((movie) => <MovieCard key={movie.title} movie={movie} />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies:
    PropTypes.arrayOf(PropTypes.shape({
      imagePath: PropTypes.string,
      rating: PropTypes.number,
      storyline: PropTypes.string,
      subtitle: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

MovieList.defaultProps = { movies: {} };

export default MovieList;
