// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, subtitle, imagePath } = this.props.movie;

    return (
      <div className="movie-card" >

        <img src={imagePath} alt="Movie cover" />
        <h4 className="movie-title">{title}</h4>
        <h5 className="movie-subtitle">{subtitle}</h5>

      </div>
    );
  }
}

export default MovieCard;
