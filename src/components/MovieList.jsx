import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';
import MovieCard from './MovieCard';
// import MovieCard from './MovieCard'


class MovieList extends React.Component {
  render() {
    const { movieProp } = this.props;
    return (
      <div>
        {movieProp.map((info) => <MovieCard movieInfo={info} key={info.title} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movieProp: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
