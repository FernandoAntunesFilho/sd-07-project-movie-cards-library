import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movie = this.props.movies;
    const moviecardlist = movie.map((card) => (
      <MovieCard key={card.title} movie={card} />
    ));

    return (<div> {moviecardlist} </div>);
  }
}

export default MovieList;

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
