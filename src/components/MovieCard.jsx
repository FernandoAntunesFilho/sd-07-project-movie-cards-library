// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <section>
        <section>
          <img src={imagePath} alt="" />
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </section>
        <section>
          <Rating rating={rating} />
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object,
}

export default MovieCard;
