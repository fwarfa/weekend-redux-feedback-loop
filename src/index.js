import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers
const feedbackReducer = (state = [], action) => {
    // Feedback added 
    switch (action.type) {
        case 'SET_FEELING':
            return [...state, action.payload]
        case 'SET_UNDERSTANDING':
            return [...state, action.payload]
        case 'SET_SUPPORT':
            return [...state, action.payload]
        case 'CLEAR_FEEDBACK':
            return []
        default:
    }

    return state;
};

// Store
const storeInstance = createStore(
    combineReducers({
        // Add Reducers as needed
        feedbackReducer
    }),   
    applyMiddleware(
        logger
    ) 
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(
    <Provider store={storeInstance}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
