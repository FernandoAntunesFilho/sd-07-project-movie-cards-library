import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    console.log(subtitle);
    console.log(storyline);
    console.log(rating);
    return (
      <div>
        <img src={ imagePath } alt="Movie Cover"/>
        <h4>{ title }</h4>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    rating: propTypes.number,
  }),
};

export default MovieCard;
