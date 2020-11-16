import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((movie, key) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}

export default MovieList;
