import React, {Component} from 'react';
import HeaderLogo from './HeaderLogo.js';
import Search from './Search.js';
import '../css/HeaderBar.css';

class HeaderBar extends Component {
  render() {
    return (
      <div className='headerbar'>
        <div className='headerbar-items'>
          <HeaderLogo home='/' app='App' />
          <Search url='http://localhost:3000/search/' />
        </div>
      </div>
    );
  }
}

export default HeaderBar;
