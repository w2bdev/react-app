import React, {Component} from 'react'
import Menu from './Menu'

class SideBar extends Component {
    render() {
        const {routes , isInversed} = this.props

        let sidebarClassName = ['sidebar']
        if(isInversed)
            sidebarClassName.push("sidebar-inverse")

        return (
            <div id="sidebar" className={sidebarClassName.join(" ")}>
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
