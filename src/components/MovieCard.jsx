// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, imagePath } = this.props.movie;
    return (
      <div className="movie-card" >

        <img src={imagePath} alt="Movie cover" />
        <h4 className="movie-title">{title}</h4>
      </div>
    );
  }
}

export default MovieCard;
