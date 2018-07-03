import axios from 'axios';

export const setItems = items => ({
    type: 'SET_ITEMS',
    items
});

export const addItem = item => ({
    type: 'ADD_ITEM',
    item
});

export const addItemWithTVA = items => ({
    type: 'ADD_WITH_TVA',
    item
});

export const loadItems = () => ({
    type: 'LOAD_ITEMS'
});

export const getItems =
    () => axios.get('./items.json')
        .then(resp => resp.data);
