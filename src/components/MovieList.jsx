import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const moviecardlist = this.props.movies.map(card => {
        <MovieCard key={card.title}/>
    })

    const returncard = () => {
        <p>
        {moviecardlist}
        </p>
    } 


    return returncard()
  }
}

export default MovieList;