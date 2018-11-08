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
