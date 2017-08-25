import {createStore, bindActionCreators, combineReducers, applyMiddleware} from 'redux';

// Modules
import * as currentTime from './modules/currentTime';
import * as currentSetting from './modules/currentSetting';

export const configureStore = () => {


    const reducer = combineReducers({
            currentTime: currentTime.reducer,
            currentSetting: currentSetting.reducer
        })


    const loggingMiddleware = (store) => (next) => (action) => {
        
        console.log(`Redux Log:`, action)
       
        next(action);
    }

    
    const store = createStore(
                    reducer, 
                    applyMiddleware(
                        loggingMiddleware
                    )
                );

    const actions = {
        currentTime: bindActionCreators(currentTime.actions, store.dispatch),
        currentSetting: bindActionCreators(currentSetting.actions, store.dispatch)
    }

    return {store, actions};
}

export default configureStore;