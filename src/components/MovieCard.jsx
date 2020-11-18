// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../components/Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <section>
        <img className="card-image" alt="" src={imagePath} />
        <div className="info">
          <h4 className="title">{title}</h4>
          <h5 className="subtitle">{subtitle}</h5>
          <p className="story-line">{storyline}</p>
          <Rating rating={rating} />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
