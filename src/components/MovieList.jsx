import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <span>Nome: {data[0].title}</span>
      </div>
    );
  }
}

MovieList.propTypes = { data: PropTypes.arrayOf.isRequired };

export default MovieList;
