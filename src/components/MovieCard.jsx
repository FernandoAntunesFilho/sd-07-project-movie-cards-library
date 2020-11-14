// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div>
        <h4>{movie.title}</h4>
        <img src={movie.imagePath} alt="No source" />
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
