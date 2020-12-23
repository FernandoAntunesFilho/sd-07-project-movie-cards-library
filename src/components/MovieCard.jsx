import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movieInfo;
    console.log(title);
    return (
      <div>
        <img alt={title} src={imagePath} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating}/>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  storyline: 'Storyline',
  title: 'Title',
  subtitle: 'Subtitle',
  rating: 0,
  imagePath: 'image source',
};

// MovieCard.PropTypes = {
//   storyline: PropTypes.string,
//   [movieInfo.title]: PropTypes.string,
//   subtitle: PropTypes.string,
//   rating: PropTypes.number,
//   imagePath: PropTypes.string,
// }
export default MovieCard;
