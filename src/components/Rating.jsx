import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const rating = this.props.rating;
    return (
      <div className="rating">
        <p>Rating: {rating}</p>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.string.isRequired };

export default Rating;
