import React from "react";

class Header extends React.Component {
  render () {
    return <header className='movie-card-header'>
        <h1 className='page-title'>{this.props.children}</h1>
      </header>;
  }
};

export default Header;