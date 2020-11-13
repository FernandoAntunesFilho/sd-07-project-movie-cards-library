// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
          <div>
            <h4 className="movie-card-title">{title}</h4>
            <h5 className="movie-card-subtitle">{subtitle}</h5>
            <p className="movie-card-storyline">{storyline}</p>
            <img className="movie-card-image" src={imagePath} alt="" />
          </div>
          <Rating className="movie-card-rating" rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
