import React, {Component} from 'react';
import "../css/MenuItem.css";

class MenuItem extends Component {
  render() {
    return (
      <li className="menuitem">
        <a className="menuitem-nav-link" href={this.props.urlLink}>
          <span className="menuitem-icon-span">
            <img src={this.props.icon} className="menuitem-icon-span-img" alt="icon" />
          </span>
          {this.props.linkLabel}
        </a>
      </li>
    );
  }
}

export default MenuItem;
