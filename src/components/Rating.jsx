import React from 'react';


class Rating extends React.Component {
  render() {
    return (<span className="rating">{this.props.rating}</span>);
  }
}

Rating.propTypes = { rating: PropTypes.number}
export default Rating;
