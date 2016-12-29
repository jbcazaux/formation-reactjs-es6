import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers/index';
import ShoppingList from './ShoppingList';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <ShoppingList title="liste de courses"/>
    </Provider>,
    document.getElementById("root")
);