// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, subtitle, storyline, rating } = this.props.movie;
       
    return (
      <div>
        {title}
        {imagePath} 
        {subtitle} 
        {storyline} 
        {rating}  
      </div>
    );
  }
}
export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

