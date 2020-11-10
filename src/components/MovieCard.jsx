// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={rating} className=".movie-card-rating" />
        <img src={imagePath} alt={title} className="movie-card-image" />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

MovieCard.defaultProps = {
  movie: {
    title: 'Título',
    subtitle: 'Subtítulo',
    storyline: 'Resumo',
    imagePath: 'URL Imagem',
    rating: 0,
  },
};

export default MovieCard;
