import React, {Component} from 'react';

class ProfileMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.handleDropDown = this
      .handleDropDown
      .bind(this);
  }

  handleDropDown() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {

    let dropDownClass = ["dropdown"];
    if(this.state.isOpen)
      dropDownClass.push("open");

    return (

      <li className={dropDownClass.join(" ")}>
        <a onClick={this.handleDropDown}>
          <span className="navbar-user-img online pull-right">
            <img src="assets/img/user.jpeg" alt=""/>
          </span>
          <span className="hidden-xs">WenBin Wong</span>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a >Edit Profile</a>
          </li>
          <li>
            <a >Setting</a>
          </li>
          <li className="divider"></li>
          <li>
            <a>Log Out</a>
          </li>
        </ul>
      </li>
    )
  }
}

export default ProfileMenu;