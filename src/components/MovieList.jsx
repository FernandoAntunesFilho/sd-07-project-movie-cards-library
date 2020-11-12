import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {

    const arrayofMovies = this.props.movies;

    return <div>{arrayofMovies.map((movie)=><MovieCard movie={movie}/>)}</div>;
  }
}

MovieList.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieList;
