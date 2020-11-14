// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import './MovieCard.css'

class MovieCard extends React.Component {
    render(){
        const { imagePath, title, subtitle , storyline, rating} = this.props.movie;
        return(
            <div className="movieCard">
                <img src={imagePath} alt={title} />
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
                <p>{storyline}</p>
                <Rating rating={rating}/>
            </div>
        )
    }
}

export default MovieCard;
