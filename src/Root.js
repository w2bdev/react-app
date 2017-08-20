import React from 'react';
import App from './App';
import { Provider } from 'react-redux';

export const Root = ({store,actions}) => {
    return (
        <Provider store={store}>
            <App actions={actions} />
        </Provider>
    );
}
export default Root;