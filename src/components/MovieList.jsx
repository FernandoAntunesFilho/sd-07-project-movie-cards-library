import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const informationMovies = this.props.data;
    return (
      <div>
        <span>Nome: {informationMovies[0].title}</span>
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = { data: PropTypes.array };
