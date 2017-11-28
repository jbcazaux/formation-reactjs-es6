import {addItems, getItems, setItems} from '../actions/items';
import {call, fork, put, take} from 'redux-saga/effects';
import Item from '../Item';

function* loadItems() {
    const items = yield call(getItems);
    yield put(setItems(items));
}

const addItemsWithTVA = function* (action) {
    const newItems = action.items.map(item => new Item(item.id, item.label, item.price * 1.20));
    yield put(addItems(newItems));
};

export function* watchLoadItems() {
    while (true) {
        const action = yield take('LOAD_ITEMS');
        yield call(loadItems, action);
    }
}

export function* watchAddItemsWithTVA() {
    while (true) {
        const action = yield take('ADD_WITH_TVA');
        yield call(addItemsWithTVA, action);
    }
}

export default function* rootSaga() {
    yield fork(watchLoadItems);
    yield fork(watchAddItemsWithTVA);
}