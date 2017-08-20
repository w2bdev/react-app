import React , { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import SubMenu from './SubMenu'

class Menu extends Component {
    render() {
      
        const {route} = this.props
        
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
                                {hasSubMenu ? <SubMenu routes={route.routes}/> : null}
                            </li>
                        )
                }}/>
            )
        }

        // is submenu exist?
        const hasSubMenu = route.routes && route.routes.length > 0 ? true : false

        return (
            <ListItemLink to={route.path} hasSubMenu={hasSubMenu}>
                {hasSubMenu? <span className="caret caret-right pull-right"></span> : ''}
                <i className={route.icon}></i>
                <span>{route.name}</span>
            </ListItemLink>
        )
    }

}

export default Menu