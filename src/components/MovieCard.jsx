import React from "react";
import PropTypes from "prop-types";
import Rating from "./Rating";

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div>
        <img src={movie.imagePath} alt="CapaDoFilme" />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating}/>
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
