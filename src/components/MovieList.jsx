import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
      return(
        <div className="movieList">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      );
  }
}

MovieList.propTypes = {
  movie: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieList;
