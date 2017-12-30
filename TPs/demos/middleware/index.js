import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from './reducers/index';
import ShoppingList from './ShoppingList';
import thunk from 'redux-thunk';
import middlewareLogger from './middleware';

const store = createStore(reducer, applyMiddleware(thunk, middlewareLogger));

ReactDOM.render(
    <Provider store={store}>
        <ShoppingList title="liste de courses"/>
    </Provider>,
    document.getElementById('root')
);