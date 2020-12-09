import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      movies.map(() => <MovieCard />)
    );
  }
}


export default MovieList;
