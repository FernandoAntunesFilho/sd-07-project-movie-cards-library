// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;
    return (
      <div>
        <img src={imagePath} alt="Nice Movie" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {
    imagePath: 'no image',
    title: 'no title',
    subtitle: 'no subtitle',
    storyline: 'no storyline',
    rating: '0.0',
  },
};

export default MovieCard;
