import React from 'react';

class MovieList extends React.Component {
  render() {
    return (
      <div>{this.props.movies}</div>
    );
  }
}

MovieList.propTypes = {
    movies: propTypes.string
}

export default MovieList;
