import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
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

    let pageContainerClassName = ["page-sidebar-fixed"]

    const {actions , currentSetting } = this.props

    if (currentSetting.isHeaderFixed) 
      pageContainerClassName.push("page-header-fixed");
    if (currentSetting.isNavToggleOn) 
      pageContainerClassName.push("page-sidebar-toggled");
    if (currentSetting.isNavMinified)
      pageContainerClassName.push("page-sidebar-minified");
    
    return (
      <Router>
        <div id="page-container" className={pageContainerClassName.join(" ")}>

          <Header
            handleSideBarToggle={actions.currentSetting.toggleNav}
            isNavToggleOn={currentSetting.isNavToggleOn} 
            isHeaderInversed={currentSetting.isHeaderInversed}
            isHeaderFixed={currentSetting.isHeaderFixed}
            />
            
          <SideBar 
            routes={RouteData.routes} 
            isInversed={currentSetting.isSidebarInversed}
            />
          
          <Content 
            routes={RouteData.flattenRoutes} 
            actions={actions} 
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