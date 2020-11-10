import React from 'react';
import Rating from './Rating.jsx';

export default class MovieCard extends React.Component {
  render() {
    const { title, imagePath, subtitle, storyline, rating } = this.props.prop;
    return (
      <div className="movie-card">
        <img src={ imagePath } className="movie-card-image"/>
        <div key={ title } className="movie-card-budy">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <div className="movie-card-rating"><Rating rating={ rating }/></div>
      </div>
    );
  }
}