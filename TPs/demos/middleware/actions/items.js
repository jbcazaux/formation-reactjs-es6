import axios from 'axios'
import Item from '../Item'

export const ADD_ITEM = 'ADD_ITEM'
export const SET_ITEMS = 'SET_ITEMS'

export const setItems = items => ({
  type: SET_ITEMS,
  items,
})

export const addItem = item => ({
  type: ADD_ITEM,
  item,
})

const getItems = () => axios.get('items.json').then(resp => resp.data)

export const fetchItems = () => dispatch =>
  getItems()
    .then(items => dispatch(setItems(items)))
    .catch(error => {
      console.log(error)
    })

export const addItemWithVTA = item => dispatch => {
  const newItem = new Item(item.id, item.label, item.price * 1.2)
  return dispatch(addItem(newItem))
}
