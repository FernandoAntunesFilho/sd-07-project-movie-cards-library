// implement MovieCard component here
import React, { Component } from 'react';
import Rating from './Rating'

class MovieCard extends Component {
  render() {

    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;

    return (
        <div className="movie-card">
          <div className="movie-card-body">
            <img className="movie-card-image" src={imagePath} alt=" "></img>
            <h4 className="movie-card-title" >{title}</h4>
            <h5 className="movie-card-subtitle" >{subtitle}</h5>
            <p className="movie-card-storyline" >{storyline}</p>
            <Rating rating={rating}/>
          </div>
        </div>
    )
  }
}

export default MovieCard;
