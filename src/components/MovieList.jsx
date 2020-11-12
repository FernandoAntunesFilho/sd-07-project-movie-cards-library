// implement MovieList component here
// implement MovieCard component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div className="movie-list">
        { movies.map((movie) => <MovieCard key={movie.title} movie={movie} />) }
      </div>
    );
  }
}

export default MovieList;
