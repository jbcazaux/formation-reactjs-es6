import {addItems, getItems, setItems} from '../actions/items';
import {all, call, put, takeEvery} from "redux-saga/effects";
import Item from "../Item";

function* loadItems() {
    const items = yield call(getItems);
    yield put(setItems(items));
}

const addItemsWithTVA = function* (action) {
    const newItems = action.items.map(item => new Item(item.id, item.label, item.price * 1.20));
    yield put(addItems(newItems));
};

export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_ITEMS', loadItems),
        takeEvery('ADD_WITH_TVA', addItemsWithTVA)
    ])
}


function* loadUser(action) {
    const user = yield call(fetchUser, action.userId);
    yield put(setUser(user));
}

const loadAgencies = function* (action) {
    const agencies = yield call(fetchAgencies, action.userId);
    const agenciesIds = agencies.map(a => a.id);
    yield put(setAgenciesIds(agenciesIds));
};

export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_USER', loadUser),
        takeEvery('LOAD_AGENCIES', loadAgencies)
    ])
}