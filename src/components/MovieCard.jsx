import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
    render() {
      const movieElement = this.props.movies;

      return <div><p>{movieElement}</p></div>;
    }
  }
  
  MovieCard.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };
  
  export default MovieCard;
  
