import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <span>Nome: {data[0].title}</span>
      </div>
    )
  }
}

export default MovieList;
