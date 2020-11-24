import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard'

class MovieList extends Component {
  render() {
    const data = this.props.data;
    const movieCards = data.map(movie => <MovieCard data={movie} />)
    return (
      <div className='movie-list'>
        {movieCards}
      </div>
    );
  }
}

MovieList.propTypes = { data: PropTypes.arrayOf.isRequired };

export default MovieList;
