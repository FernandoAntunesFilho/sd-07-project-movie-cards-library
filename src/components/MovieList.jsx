import React from 'react';
import MovieCard from '../components/MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movieslist) => (
          <MovieCard key={movieslist.title} movie={movieslist} />
        ))}
      </div>
    );
  }
}
