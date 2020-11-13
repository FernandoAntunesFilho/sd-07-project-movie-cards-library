import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props.movies;
    return (
      <div>
        {movies.map((value) => <MovieCard key={value.title} movie={value} />)}
      </div>
    );
  }
}

export default MovieList;
