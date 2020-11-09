// implement MovieList component here
import React from 'react';
import propTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return <div className="movie-list"> {this.props.movies} </div>;
  }
}

MovieList.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieList;
