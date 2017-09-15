import {addItems, getItems, setItems} from '../actions/items';
import {call, fork, put} from 'redux-saga/effects';
import Item from '../Item';
import * as sagas from './items';
import rootSaga from './items';

describe(sagas, () => {
    it('load items', () => {
        const gen = sagas.loadItems();

        expect(gen.next().value).toEqual(call(getItems));
        const items = [];
        expect(gen.next(items).value).toEqual(put(setItems(items)));
        expect(gen.next().done).toBeTruthy();
    });

    it('add items with tva', () => {
        const action = {items: [new Item(null, null, 1)]};
        const gen = sagas.addItemsWithTVA(action);

        expect(gen.next().value).toEqual(put(addItems([new Item(null, null, 1.2)])));
        expect(gen.next().done).toBeTruthy();
    });

    it('forks watch sagas', () => {
        const gen = rootSaga();

        expect(gen.next().value).toEqual(fork(sagas.watchLoadItems));
        expect(gen.next().value).toEqual(fork(sagas.watchAddItemsWithTVA));
        expect(gen.next().done).toBeTruthy();
    });
});