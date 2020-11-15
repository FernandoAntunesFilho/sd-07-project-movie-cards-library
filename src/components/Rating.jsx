import React from 'react';
import PropTypes from 'prop-types';

class RatingComponent extends React.Component {
  render() {
    const rating = this.props.rating;
    return (
      <div className="rating">
        {rating}
      </div>
    );
  }
}

RatingComponent.propTypes = { rating: PropTypes.number.isRequired };

export default RatingComponent;
