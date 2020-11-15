import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const ratings = this.props.rating;
    return (
      <div className="rating">
        {ratings}
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
