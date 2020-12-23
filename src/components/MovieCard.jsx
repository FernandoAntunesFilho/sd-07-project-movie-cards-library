import React from 'react';

class MovieCard extends React.Component {
    render() {
        return <div>
            <h4>{ this.props.movieInfo.title }</h4>
            <h5> { this.props.movieInfo.subtitle }</h5>
            <p>{ this.props.movieInfo.storyline }</p>
            <img alt={ this.props.movieInfo.title } src={this.props.movieInfo.imagePath} />
        </div>
    }
}

export default MovieCard;
