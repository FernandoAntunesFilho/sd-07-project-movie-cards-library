import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends Component {
  render() {
    return (
      <div>
        {movies.map(() => (
          <MovieCard />
        ))}
      </div>
    );
  }
}

export default MovieList;
