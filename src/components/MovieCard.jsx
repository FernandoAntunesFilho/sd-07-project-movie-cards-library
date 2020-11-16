import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';


class MovieCard extends React.Component {
  render() { 
    const { movie } = this.props;
    return (
      <div>
        <img src={movie.imagePath} alt={movie.title} />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default MovieCard;


