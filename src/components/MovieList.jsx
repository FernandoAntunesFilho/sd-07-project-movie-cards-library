import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

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
      {
        title: 'Movie Title 3',
        subtitle: 'Movie Subtitle 3',
        storyline: 'Movie Storyline 3',
        rating: 3,
        imagePath: 'images/movie_3',
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
