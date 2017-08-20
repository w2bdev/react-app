import React, {Component} from 'react';

class NavBarMenu extends Component {
  
  render() {

    const { icon , handleAction } =  this.props 

    return (
      <li>
        <a onClick={handleAction} >
          <i className={icon}></i>
        </a>
      </li>
    )
  }
}

export default NavBarMenu;