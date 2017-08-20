import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavHeader extends Component {
    render() {
        const { companyName , isNavToggleOn, handleSideBarToggle} = this.props

        let navbarToggleClass = ["navbar-toggle"]

        if(isNavToggleOn)
            navbarToggleClass.push("active")
  

        return (
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">
                    {companyName}
                </Link>
                <button type="button" onClick={handleSideBarToggle} className={navbarToggleClass.join(" ")}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
        )
    }
}

export default NavHeader;
