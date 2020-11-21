import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <body className="body">
          <img src={imagePath} alt="moviedesign" className="image" />
          <h4 className="title">{title}</h4>
          <h5 className="subtitle">{subtitle}</h5>
          <p className="storyline">{storyline}</p>
        </body>
        <Rating rating={rating} />
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
