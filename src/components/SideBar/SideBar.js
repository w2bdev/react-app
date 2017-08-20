import React, {Component} from 'react'
import Menu from './Menu'

class SideBar extends Component {
    render() {
        const {routes} = this.props
        return (
            <div id="sidebar" className="sidebar sidebar-inverse">
                <div data-scrollbar="true" data-height="100%">
                    <ul className="nav">
                        {
                            routes.map((route,i) => {
                                if(route.path)
                                    return (
                                        <Menu key={i} route={route}/>
                                    )
                                else
                                    return (<li key={i} className="nav-header">{route.name}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
