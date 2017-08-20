import React from 'react'
import _ from 'lodash'

// Views
import Home from '../views/Home/Home'

export const routes = [
    {
        name: "Navigation" // name attribute only is title
    }, {
        name: 'Home',
        icon: 'ti-home',
        path: '/home',
        exact: true,
        component: Home
    }, {
        name: 'About',
        icon: 'ti-home',
        path: '/About',
        routes: [],
        exact: true,
        component: () => <h2>About</h2>
    }, {
        name: "Notification"
    }, {
        name: 'Email',
        icon: 'ti-email',
        path: '/email',
        routes: [
            {
                name: 'Inbox',
                path: '/email/inbox',
                exact: true,
                component: () => <h2>Inbox</h2>
            }, {
                name: 'Outbox',
                path: '/email/outbox',
                exact: true,
                component: () => <h2>Outbox</h2>
            }
        ],
        exact: true,
        component: () => <h2>Email</h2>
    }
]


// Flatten route For rendering
export const flattenRoutes = _.flattenDeep(routes.map((route, iindex) => {
  if (route.routes && route.routes.length > 0) 
    return [].concat(route, route.routes);
  return route
}))
