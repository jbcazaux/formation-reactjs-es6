import axios from 'axios'

export const setItems = items => {
  return {
    type: 'SET_ITEMS',
    items,
  }
}

export const addItem = item => {
  return {
    type: 'ADD_ITEM',
    item,
  }
}

const getItems = () => axios.get('./items.json').then(resp => resp.data)

export const fetchItems = () => dispatch =>
  getItems()
    .then(items => {
      //TODO: now that we have the items list, we can dispatch the setItems action
    })
    .catch(error => {
      console.log(error)
    })
