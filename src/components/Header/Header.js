import React, {Component} from 'react';

// import {Link} from 'react-router-dom';
import NavHeader from './NavHeader';
import NavBar from './NavBar';
import SearchBox from './SearchBox';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSearch: false,
      isOpenProfile : false
    };

    this.handleSearch = this
      .handleSearch
      .bind(this);
  }

  handleSearch() {
    this.setState(prevState => ({
      isOpenSearch: !prevState.isOpenSearch
    }));
  }

  render() {

    const {isNavToggleOn, handleSideBarToggle} = this.props

    return (
      <header className="header navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">

          <NavHeader
            companyName="BinSoft Solution"
            isNavToggleOn={isNavToggleOn}
            handleSideBarToggle={handleSideBarToggle}/> {/*Start : header navigation right*/}
          
          <NavBar position="right" handleSearch={this.handleSearch}/>

          <SearchBox isActive={this.state.isOpenSearch} handleSearch={this.handleSearch}/>
        
        </div>

      </header>
    );
  }
}

export default Header;
