import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCardComponent extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;
    return (
      <div className="movie-card movie-card-body">
        <img src={imagePath} alt="film cover" className="movie-card-image" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCardComponent.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCardComponent;
