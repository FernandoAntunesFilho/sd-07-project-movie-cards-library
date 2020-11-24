import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="movie-card">
        <img src={data.imagePath} alt={data.title} />
        <h4>{data.title}</h4>
        <h5>{data.subtitle}</h5>
        <p>{data.storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = { data: PropTypes.objectOf.isRequired };

export default MovieCard;
