// implement Rating component here
import "../App.css";
import React from "react";
// import PropTypes from "prop-types";

class Rating extends React.Component {
	render() {
		return <div className="rating">{this.props.rating}</div>;
	}
}

// Rating.propTypes = {
// 	rating: PropTypes.string.isRequired,
// };

// Rating.propTypes = {
// 	rating: "Raking",
// };

export default Rating;
