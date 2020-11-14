import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {

  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;

MovieList.defaultProps = { movies: [] };

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.shape({
    imagePath: propTypes.string,
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.number,
  })),
};
