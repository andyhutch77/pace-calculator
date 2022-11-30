import React from 'react';
class Header extends React.Component {
  render(props) {
    return <h3>{this.props.title}</h3>
  }
}
export default Header;