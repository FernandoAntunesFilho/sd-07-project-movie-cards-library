import React from "react";
import propTypes from "prop-types";

class MovieList extends React.Component {
  render() {
    return <div>{this.props.movies}</div>;
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieList;
