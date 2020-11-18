import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((movie) => <div key={movie.title}><MovieCard movie={movie} /></div>)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.div).isRequired };

export default MovieList;
