import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Views
import Welcome from '../../views/Welcome/Welcome'


class Content extends React.Component {
    
    render() {
        const {routes, actions} = this.props;

        const injectActions = (Component, props) => {
            return <Component 
                        actions={this.props.actions}
                        {...props} />
        }

        return (
            <div id="content" className="content">

                {/*Default Route  */}
                <Route exact={true} path="/" component= {Welcome}/> 

                { 
                //generating route base on flattened route
                //currently support 2 layer navigation
                routes.map((route, index) => {
                    if (route.path) 
                    return (
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            render={ ()=> injectActions(route.component) } />
                        )
                    return null
                })
                }

            </div>
        )
    }
}

export default Content