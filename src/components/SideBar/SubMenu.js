import React , { Component }from 'react';
import {NavLink} from 'react-router-dom'

class SubMenu extends Component {
    render(){
        const {routes} = this.props
        
        return (
            <ul className="sub-menu">
                {
                    routes.map((route,index) => {
                        return(
                            <li key={index}>
                                <NavLink 
                                    to={route.path}
                                    activeClassName="active">
                                        {route.name}
                                </ NavLink>
                            </li>
                        )
                    })
                }
                
            </ul>
        )
    }
}

export default SubMenu