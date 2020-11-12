import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <div>
          <h4 className="page-title">{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <img src={imagePath} alt="" />
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
      rating: PropTypes.number,
    },
  ).isRequired,
};

export default MovieCard;
