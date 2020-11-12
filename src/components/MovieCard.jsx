import React from 'react';
import movies from '../data';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MovieCard extends React.Component {
render() {
   const {title,subtitle,storyline,rating,imagePath} = this.props.movie;
    return(<div className="MovieCard">
         <img className="movie-card-image" src={imagePath} alt="bla" />
         <div className="movie-card-body">
         <h4>{title}</h4>
         <h5>{subtitle}</h5>
         <p>{storyline}</p>
      <div>
          < Rating rating={rating}/>
      </div>
      </div>
     </div>)
}
}
MovieCard.defaultProps = { movie: {} };
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};


export default MovieCard;