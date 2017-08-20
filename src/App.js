import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Components
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

// Data
import * as RouteData from './api/routes';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavToggleOn: false
    };

    this.handleSideBarToggle = this
      .handleSideBarToggle
      .bind(this);
  }

  handleSideBarToggle() {
    this.setState(prevState => ({
      isNavToggleOn: !prevState.isNavToggleOn
    }));
  }

  render() {

    let pageContainerClassName = ["page-header-fixed", "page-sidebar-fixed"]

    if (this.state.isNavToggleOn) 
      pageContainerClassName.push("page-sidebar-toggled");
    
    return (
      <Router>
        <div id="page-container" className={pageContainerClassName.join(" ")}>

          {/* Top Header Component 
           * handleSideBarToggle :  handler for side bar toogle
           * isNavToggleOn : Flag as the sidebar toogle in mobile mode
          */}
          <Header
            handleSideBarToggle={this.handleSideBarToggle}
            isNavToggleOn={this.state.isNavToggleOn} />

          {/* Sidebar Component
            * routes : route used to generate the sidebar menu
          */}
          <SideBar routes={RouteData.routes}/>


          <div id="content" className="content">
            {/*Default Route  */}
            <Route exact={true} path="/" component= {() => <h2>Dashboard</h2>}/> {/*Dynamically generated route  */}

            { //generating route base on flattened route
              //currently support 2 layer navigation
              RouteData.flattenRoutes.map((route, index) => {
                if (route.path) 
                  return (
                      <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.component} />
                    )
                return null
              })
            }

          </div>
        </div>
      </Router>
    )
  }
}

export default App