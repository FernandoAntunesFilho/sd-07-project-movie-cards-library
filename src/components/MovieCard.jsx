import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = { data: PropTypes.objectOf.isRequired };

export default MovieCard;
