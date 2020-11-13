import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <header>
        <h4>{rating}</h4>
      </header>
    );
  }
}

Rating.propTypes = { rating: propTypes.number.isRequired };

export default Rating;
