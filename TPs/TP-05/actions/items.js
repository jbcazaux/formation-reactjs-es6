import axios from 'axios';

export const setItems = (items) => {
    return {
        type: 'SET_ITEMS',
        items
    }
};

export const addItems = (items) => {
    return {
        type: 'ADD_ITEMS',
        items
    }
};

const getItems =
    () => axios.get('./items.json')
        .then(resp => resp.data);

export const fetchItems = () =>
    (dispatch) => getItems()
        .then(items => {
            //TODO !!
        })
        .catch((error) => {
            console.log(error);
        });
