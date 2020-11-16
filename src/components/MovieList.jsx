import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = [
      {
        title: 'Movie Title 1',
        subtitle: 'Movie Subtitle 1',
        storyline: 'Movie Storyline 1',
        rating: 4.5,
        imagePath: 'images/movie_1',
      },
      {
        title: 'Movie Title 2',
        subtitle: 'Movie Subtitle 2',
        storyline: 'Movie Storyline 2',
        rating: 4.5,
        imagePath: 'images/movie_2',
      },
    ];
    return (
      <div>
        {movies.map((movie, key) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
