import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

// import registerServiceWorker from './registerServiceWorker';

import configureStore from './redux/configureStore';
const {store, actions} = configureStore();

ReactDOM.render(
    <Root store={store} actions={actions}/>, document.getElementById('root')
);

// registerServiceWorker();