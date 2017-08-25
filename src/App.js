import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux';

// Components
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content';

// Data
import * as RouteData from './api/routes';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {

    let pageContainerClassName = ["page-header-fixed", "page-sidebar-fixed"]

    if (this.props.currentSetting.isNavToggleOn) 
      pageContainerClassName.push("page-sidebar-toggled");
    if (this.props.currentSetting.isNavMinified)
      pageContainerClassName.push("page-sidebar-minified");
    
    return (
      <Router>
        <div id="page-container" className={pageContainerClassName.join(" ")}>

          <Header
            handleSideBarToggle={this.props.actions.currentSetting.toggleNav}
            isNavToggleOn={this.props.currentSetting.isNavToggleOn} 
            isHeaderInversed={this.props.currentSetting.isHeaderInversed}
            isHeaderFixed={this.props.currentSetting.isHeaderFixed}
            />
            
          <SideBar 
            routes={RouteData.routes} 
            isInversed={this.props.currentSetting.isSidebarInversed}
            />
          
          <Content 
            routes={RouteData.flattenRoutes} 
            actions={this.props.actions} 
            />
          
        </div>
      </Router>
    )
  }
}



const mapStateToProps = (state) => {
    return { currentSetting : state.currentSetting }
}

export default connect(mapStateToProps)(App)