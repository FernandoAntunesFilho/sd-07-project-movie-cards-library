// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

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

MovieCard.propTypes = { movie: PropTypes.objectOf(PropTypes.object.isRequired) };

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    title: '',
    subtitle: '',
    storyline: '',
    imagePath: '',
    rating: 0,
  }),
};

export default MovieCard;
