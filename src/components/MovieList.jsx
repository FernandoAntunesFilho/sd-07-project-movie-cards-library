import React from 'react';
// import movies from '../data';
import MovieCard from './MovieCard';
// import MovieCard from './MovieCard'
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movieProp } = this.props;
    return (
      <div>
        {movieProp.map(info => {
          return (
            <MovieCard movieInfo={info} key={info.title} />
          );
        })}
      </div>
    );
  }
}

MovieList.propTypes = { movieProp: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
