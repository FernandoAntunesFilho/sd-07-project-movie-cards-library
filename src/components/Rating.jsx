import React from 'react';
import movies from '../data';

class Rating extends React.Component {
  render() {
    return (
      <div>
        <p>{movies.rating}</p>
      </div>);
  }
}
export default Rating;

