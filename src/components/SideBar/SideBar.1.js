import React, {Component} from 'react'
import {Route, Link, NavLink} from 'react-router-dom'

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)


class SideBar extends Component {

    render() {

        // Generate Nav link 
        const ListItemLink = ({
            hasSubMenu,
            to,
            ...rest
        }) => {
            return (
                <Route
                    path={to}
                    children={({match}) => {
                    
                        let menuClassArray = [];
                        
                        if(hasSubMenu)
                            menuClassArray.push("has-sub")

                        if(match)
                            menuClassArray.push("active")

                        
                        return (
                            <li
                                className={menuClassArray.join(" ")}>
                                <Link to={to} {...rest}/>
                            </li>
                        )
                }}/>
            )
        }

        return (
            <div id="sidebar" className="sidebar sidebar-inverse">
                <div data-scrollbar="true" data-height="100%">
                    <ul className="nav">
                        {/* <li className="nav-header">Navigation</li> */}

                        {/*Dyanmically generate menu  */}
                        {this.props.menus.map((menu, i) => {
                            const hasSubMenu = menu.routes.length > 0
                                ? true
                                : false

                            return (
                                <ListItemLink key={i} to={menu.path} hasSubMenu={hasSubMenu}>
                                    {hasSubMenu ? <span className="caret caret-right pull-right"></span> : ''}
                                    <i className={menu.icon}></i>
                                    {menu.name}
                                </ListItemLink>
                            )
                        })}

                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
