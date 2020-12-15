import React from "react";
import PropTypes from "prop-types";

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div>
        <img src={movie.imagePath} alt="CapaDoFilme" />
        <h4>{movie.title}</h4>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

export default MovieCard;