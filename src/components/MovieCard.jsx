import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={movie.imagePath} alt="" />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    imagePath: propTypes.string,
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
  }),
};

MovieCard.defaultProps = { movie: {} };

export default MovieCard;
