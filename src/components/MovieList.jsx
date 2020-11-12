// implement MovieList component here
import React from 'react';


class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
         {movies.map(movies)}
      </div>
    );
  }
}

export default MovieList;

