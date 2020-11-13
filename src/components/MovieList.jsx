import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((element) => (
          <MovieCard key={element.title} movie={element} />
        ))}
      </div>
    );
    // return <div>{ arrayofMovies.map((movie) => <MovieCard movie={movie}/>) }</div>;
  }
}

MovieList.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieList;
