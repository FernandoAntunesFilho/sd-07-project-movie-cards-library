import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
render () {
    return (
    <div>
        <ul>
          { this.props.object.map(movie => {
           return (
               <div>
              <li> { movie.title } 
              <MovieCard key={ movie.title } movieInfo={ movie } />
              </li>
              </div>
           )
          })
          }
        </ul>
    </div>
    )}
}
export default MovieList;