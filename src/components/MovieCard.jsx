import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={this.props.movie.imagePath} alt="" />
        <h4 className="movie-card-title">{this.props.movie.title}</h4>
        <h5 className="movie-card-subtitle">{this.props.movie.subtitle}</h5>
        <p className="movie-card-storyline">{this.props.movie.storyline}</p>
        <div className="movie-card-rating"><Rating rating={this.props.movie.rating} /></div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.oneOfType([PropTypes.object]).isRequired };

export default MovieCard;
