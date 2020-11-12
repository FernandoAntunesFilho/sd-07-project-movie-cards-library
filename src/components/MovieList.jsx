import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        { movies.map((intem) => <MovieCard key={intem.title} movie={intem} />) }
      </section>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
MovieList.defaultProps = {
  movies: [{
    title: 'NO MOVIE TITLE',
    subtitle: 'NO MOVIE SUBTITLE',
    storyline: 'NO MOVIE SINOPSE',
    imagePath: 'NO IMAGE',
    rating: 0.0,
  }],
};

export default MovieList;
