import {addItems, getItems, setItems} from '../actions/items';
import {call, fork, put} from "redux-saga/effects";
import Item from "../Item";
import * as sagas from './items';
import rootSaga from './items';

describe(sagas, () => {
    it('load items', () => {
        const gen = sagas.loadItems();
        //TODO !
    });

    it('add items with tva', () => {
        const action = {items: [new Item(null, null, 1)]};
        const gen = sagas.addItemsWithTVA(action);
        //TODO !
    });

    it('forks watch sagas', () => {
        const gen = rootSaga();
        //TODO !
    });
});