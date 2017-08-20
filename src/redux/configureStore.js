import {createStore, bindActionCreators, combineReducers, applyMiddleware} from 'redux';

// Modules
import * as currentTime from './modules/currentTime';

export const configureStore = () => {


    const reducer = combineReducers({
            currentTime: currentTime.reducer
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
        currentTime: bindActionCreators(currentTime.actions, store.dispatch)
    }

    return {store, actions};
}

export default configureStore;