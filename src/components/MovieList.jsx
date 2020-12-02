import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';


export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div  className="movie-list">
        {movies.map((movieslist) => (
          <MovieCard key={movieslist.title} movie={movieslist} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
