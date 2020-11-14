import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'

class MovieList extends React.Component{
    render(){
        const movies = this.props.movies;
        return(
            <div className="movieList">
                {movies.map((movie) => <MovieCard key={movie.title} movie={movie}/>)}
            </div>
        )
    }
}

export default MovieList;
