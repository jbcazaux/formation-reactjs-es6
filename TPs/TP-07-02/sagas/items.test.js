import {addItems, getItems, setItems} from '../actions/items';
import {call, fork, put} from 'redux-saga/effects';
import Item from '../Item';
import * as sagas from './items';
import rootSaga from './items';

describe('sagas', () => {
    it('load items', () => {
        // TODO !!
    });

    it('add items with tva', () => {
        // TODO !!
    });

    it('forks watch sagas', () => {
        // TODO !!
    });
});