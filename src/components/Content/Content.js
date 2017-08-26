import React from 'react'
import {Route , Switch} from 'react-router-dom'

// Views
import Welcome from '../../views/Welcome/Welcome'


class Content extends React.Component {
    
    render() {
        const {routes, actions} = this.props;

        const injectActions = (Component, props) => {
            return <Component 
                        actions={actions}
                        {...props} />
        }

        return (
            <div id="content" className="content">
                <Switch>
                {/*Default Route  */}
                    <Route exact={true} path="/" component= {Welcome}/> 

                    { 
                    //generating route base on flattened route
                    //currently support 2 layer navigation
                    routes.map((route, index) => {
                        if (route.path) 
                        return (
                            <Route
                                key={"content-"+index}
                                exact={route.exact}
                                path={route.path}
                                render={ (props)=> injectActions(route.component , props) } />
                            )
                        return null
                    })
                    }
                </Switch>
            </div>
        )
    }
}

export default Content