import React from 'react';
import MovieCard from '../components/MovieCard';
import PropTypes from 'prop-types';

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

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
