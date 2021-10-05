import { ADD_ITEM, SET_ITEMS } from '../actions/items'

const items = (state = [], action) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.items
    case ADD_ITEM:
      return state.concat(action.item)
    default:
      return state
  }
}

export default items
