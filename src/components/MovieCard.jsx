import React from 'react';
import Rating from './Rating';


const MovieCard = (props) => {
  const { imagePath,title,subtitle, storyline, rating } = props;
  return (
      <div>
          <div>
       <img src={imagePath} alt={title} />
          <h4>{title}</h4>  
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          </div>
        <div>
          <Rating rating={rating} />
          </div>
      </div>
    );
}
export default MovieCard;