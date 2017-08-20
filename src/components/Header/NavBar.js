import React, {Component} from 'react';
import NavBarMenu from './NavBarMenu';
import ProfileMenu from './ProfileMenu';

class NavBar extends Component {

  render() {
    const {position , handleSearch } = this.props

    let navBarClass = ["nav","navbar-nav"];
    
    if(position && position === "right")
      navBarClass.push("navbar-right");

    return (
      <div className="navbar-xs-justified">
        <ul className={navBarClass.join(" ")}>

          <NavBarMenu icon="ti-search" handleAction={handleSearch} />
          <ProfileMenu />
        </ul>
      </div>
    )
  }
}

export default NavBar;