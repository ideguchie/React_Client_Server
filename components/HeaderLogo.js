import React, {Component} from 'react';
import '../css/HeaderLogo.css';

class HeaderLogo extends Component {
  render() {
    return (
      <div className='headerlogo'>
        <a href={this.props.home}>{this.props.app}</a>
      </div>
    );
  }
}

export default HeaderLogo;
