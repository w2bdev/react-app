import React, {Component} from 'react';
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

    const {isNavToggleOn, isHeaderInversed , isHeaderFixed , handleSideBarToggle} = this.props

    let headerClassName = ["header","navbar"];
    
    if(isHeaderInversed)
      headerClassName.push("navbar-inverse");
    else
      headerClassName.push("navbar-default")

    if(isHeaderInversed)
      headerClassName.push("navbar-fixed-top");
    
    return (
      <header className={headerClassName.join(" ")}>
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
