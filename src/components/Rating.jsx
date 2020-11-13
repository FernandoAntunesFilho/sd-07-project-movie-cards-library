// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
    <section className="rating">{this.props.rating}</section>
    )
  }
}

export default Rating;
