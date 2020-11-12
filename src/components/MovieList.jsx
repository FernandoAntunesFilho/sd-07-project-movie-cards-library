import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';



class MovieList extends React.Component {
    
 render(){
    const {movies} = this.props;
    return( <div>

       { movies.map(movie => <div > 
       <MovieCard movie={movie} key={movie.title}/>
       </div>) }
    </div>)

 }


}
MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
export default MovieList;
