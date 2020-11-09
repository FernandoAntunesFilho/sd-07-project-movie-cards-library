import React, { Component } from "react";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types"


class MovieList extends Component {
  render() {

    const movies = this.props.movies;

    return movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
    ));
  }
}

MovieList.propTypes = {
    movie: PropTypes.object.isRequired,
}

export default MovieList;