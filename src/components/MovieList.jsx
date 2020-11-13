
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  const { movies } = props;
  return (
    <div>
      {movies.map((movie ) => <MovieCard key={movie.title} movies={movie} />)}
    </div>);
};

export default MovieList;
