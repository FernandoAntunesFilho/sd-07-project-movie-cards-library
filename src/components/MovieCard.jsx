// implement MovieCard component here
import React, { Component } from 'react';
import Rating from '../components/Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;

    return (
      <div className="movie-card" >

        <img src={imagePath} alt="Movie cover" />
        <h4 className="movie-title">{title}</h4>
        <h5 className="movie-subtitle">{subtitle}</h5>
        <p className="movie-story-line">{storyline}</p>

        <Rating />
      </div>
    );
  }
}

export default MovieCard;
