import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { eventReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const eventState = createStore(
    eventReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
<Provider store = {eventState}>
    <App />
</Provider>,
 document.getElementById('root'));


