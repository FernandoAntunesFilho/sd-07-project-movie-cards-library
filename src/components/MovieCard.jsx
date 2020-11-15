import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <section>
        <img src={imagePath} alt="Capa de um filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </section>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = { movie: PropTypes.instanceOf(Object).isRequired };
