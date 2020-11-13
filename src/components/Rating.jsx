// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {

    return (<h4 className="rating" >{this.props.rating}</h4>)
  }
}

export default Rating;
