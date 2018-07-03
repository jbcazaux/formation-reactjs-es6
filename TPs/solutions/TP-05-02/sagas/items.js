import {addItem, getItems, setItems} from '../actions/items';
import {call, fork, put, take} from 'redux-saga/effects';
import Item from '../Item';

function* loadItems() {
    const items = yield call(getItems);
    yield put(setItems(items));
}

const addItemWithTVA = function* (action) {
    const newItem = new Item(action.item.id, action.item.label, action.item.price * 1.20);
    yield put(addItem(newItem));
};

export function* watchLoadItems() {
    while (true) {
        const action = yield take('LOAD_ITEMS');
        yield call(loadItems, action);
    }
}

export function* watchAddItemWithTVA() {
    while (true) {
        const action = yield take('ADD_WITH_TVA');
        yield call(addItemWithTVA, action);
    }
}

export default function* rootSaga() {
    yield fork(watchLoadItems);
    yield fork(watchAddItemWithTVA);
}
