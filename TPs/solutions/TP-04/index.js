import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducers/index';
import ShoppingList from './ShoppingList';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <ShoppingList title="liste de courses"/>
    </Provider>,
    document.getElementById('root')
);