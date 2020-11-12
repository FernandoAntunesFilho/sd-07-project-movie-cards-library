// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.item;  
      return (
        <div>
          <p className="movie-card-title">{title}</p>
          <p className="movie-card-subtitle">{subtitle}</p>
          <p className="movie-card-storyline">{storyline}</p>
          <p className="movie-card-image">{imagePath}</p>
          <p className="movie-card-rating">{rating}</p>
        </div>
    );  
  }
}

export default MovieCard;
