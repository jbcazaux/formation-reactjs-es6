import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {reducer} from './reducers/index';
import ShoppingList from './ShoppingList';

const store = createStore(reducer);

ReactDOM.render(
    <ShoppingList title="liste de courses"/>,
    document.getElementById('root')
);