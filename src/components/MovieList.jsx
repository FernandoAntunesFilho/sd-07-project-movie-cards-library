import React, { Component } from 'react';
import Movies from '../data';
import MovieCard from './MovieCard'

export default class MovieList extends Component {
  render() {
    const moviesList = this.props.moviesItens;
    return(
      <main>
        <div>
          {Movies.map(moviesItens => <div>
            <MovieCard  key={moviesItens.title} />
          </div>)}
        </div>
      </main>
    )
  }
}
