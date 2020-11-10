import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title.toString()}
            imagePath={movie.imagePath}
            title={movie.title}
            subtitle={movie.subtitle}
            storyline={movie.storyline}
            rating={movie.rating}
          />
        ))}{' '}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieList;
