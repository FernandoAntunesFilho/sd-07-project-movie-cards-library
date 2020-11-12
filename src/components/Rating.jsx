import React from 'react';

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

MovieCard.propTypes = {
    movie: PropTypes.shape({
      rating: PropTypes.number,
    }).isRequired,
  };
  