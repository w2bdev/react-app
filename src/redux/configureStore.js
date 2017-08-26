import {createStore, bindActionCreators, combineReducers, applyMiddleware} from 'redux';

// Modules
import * as currentTime from './modules/currentTime';
import * as currentSetting from './modules/currentSetting';

// Middleware
import * as loggingMiddleware from './middlewares/loggingMiddleware';

export const configureStore = () => {


    const reducer = combineReducers({
            currentTime: currentTime.reducer,
            currentSetting: currentSetting.reducer
        })
    
    const store = createStore(
                    reducer, 
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                    applyMiddleware(
                        loggingMiddleware.logging
                    )
                );

    const actions = {
        currentTime: bindActionCreators(currentTime.actions, store.dispatch),
        currentSetting: bindActionCreators(currentSetting.actions, store.dispatch)
    }

    return {store, actions};
}

export default configureStore;