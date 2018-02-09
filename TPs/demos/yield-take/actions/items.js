import axios from 'axios';

export const setItems = items => ({
    type: 'SET_ITEMS',
    items
});

export const addItems = items => ({
    type: 'ADD_ITEMS',
    items
});

export const addItemsWithTVA = items => ({
    type: 'ADD_WITH_TVA',
    items
});

export const loadItems = () => ({
    type: 'LOAD_ITEMS'
});

export const getItems =
    () => axios.get('./items.json')
        .then(resp => resp.data);
