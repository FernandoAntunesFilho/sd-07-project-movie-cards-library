// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { imagePath } = this.props.movie;
    return (
      <div className="movie-card" >
        <img src={imagePath} alt="Movie cover" />
      </div>
    );
  }
}

export default MovieCard;
