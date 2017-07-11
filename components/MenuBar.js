import React, {Component} from 'react';
import LinkButton from './LinkButton.js'
import '../css/MenuBar.css';
import logo from '../logo.svg';

class MenuBar extends Component {
  render() {
    return (
      <div className="menubar">
        <ul className="menu-collection">
          <LinkButton icon={logo} linkLabel='A Menu Item' urlLink='https://www.w3schools.com/html/html5_svg.asp'/>
          <LinkButton icon={logo} linkLabel='A New Menu Item' urlLink='https://www.w3schools.com/html/html5_svg.asp'/>
        </ul>
      </div>
    );
  }
}

export default MenuBar;
