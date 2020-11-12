import React from 'react';
import PropTypes from 'prop-types';
class Rating extends React.Component {
  render() {
    return (
      <div>
        {this.props.rating}
      </div>
    );
  }
}
export default Rating;

Rating.propTypes = { rating: PropTypes.number.isRequired };
