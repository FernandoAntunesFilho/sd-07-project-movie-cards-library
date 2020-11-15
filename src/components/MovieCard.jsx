import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <section>
        <img src={imagePath} alt="Capa de um filme" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={rating} />
      </section>
    );
  }
}

MovieCard.PropTypes = {
   movie: PropTypes.instanceOf(Object)
};

export default MovieCard;
