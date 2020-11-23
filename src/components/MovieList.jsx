import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movie = this.props.movies;
    let moviecardlist = movie.map((card) => (
        <MovieCard key={card.title} movie={movie} />
        ));
        
    return (<div> {moviecardlist} </div>);
  }
}

export default MovieList;