import axios from "axios";
import Item from "../Item";

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
            dispatch(setItems(items));
        })
        .catch((error) => {
            console.log(error);
        });

export const addItemsWithTVA = (items) =>
    (dispatch) => {
        const newItems = items.map(item => new Item(item.id, item.label, item.price * 1.20));
        return dispatch(addItems(newItems));
    };