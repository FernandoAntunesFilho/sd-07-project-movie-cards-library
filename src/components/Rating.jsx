// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    return (<h4 className="rating" >{this.props.rating}</h4>);
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
