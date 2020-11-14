// implement Rating component here
import React from 'react';
import './Rating.css';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (
    <div className="rating">{this.props.rating}</div>
    );
  }
}

Rating.propTypes = {
  movie: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};
  
export default Rating;
