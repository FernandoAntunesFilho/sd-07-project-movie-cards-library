import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <img src="{imagePath}" alt="" />
        <h4>{title}</h4>
      </div>

    );
  }
}

export default MovieCard;
