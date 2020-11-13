import Rating from './Rating';
import React from 'react';

const MovieCard = (props) =>{
    const {movie} = props;
    return (
        <div>
        <div>
       <img src={movie.imagePath} alt={movie.title} />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        </div>
        <div>
          <Rating/>
        </div>
      </div>
    )
}
 export default MovieCard;