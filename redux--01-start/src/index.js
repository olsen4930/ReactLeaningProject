import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import counterReducer from './store/reducer/counter'
import resultReducer from './store/reducer/result'

import './index.css';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
})

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Next', next);
            const result = next(action);
            console.log('[Middleware] next state', store.getState())
            return result;
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
