// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Rating from '../components/Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

    return (
      <div className="movie-card" >

        <img src={imagePath} alt="Movie cover" />
        <h4 className="movie-title">{title}</h4>
        <h5 className="movie-subtitle">{subtitle}</h5>
        <p className="movie-story-line">{storyline}</p>

        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = { movie: {} };
