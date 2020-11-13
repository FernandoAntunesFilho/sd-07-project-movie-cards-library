import React from 'react';
import Rating from './Rating';


const MovieCard = (props) => {
  const { movies } = props;
  return (
    <div>
      <div>
        <img src={movies.imagePath} alt={movies.title} />
        <h4>{movies.title}</h4>
        <h5>{movies.subtitle}</h5>
        <p>{movies.storyline}</p>
      </div>
      <div>
        <Rating rating={movies.rating} />
      </div>
    </div>
  );
};
export default MovieCard;
