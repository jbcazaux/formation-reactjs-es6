import { ADD_ITEMS, ItemsAction, SET_ITEMS } from '../actions/items'
import Item from '../domain/Item'

const items = (state: ReadonlyArray<Item> = [], action: ItemsAction) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.items
    case ADD_ITEMS:
      return state.concat(action.items)
    default:
      return state
  }
}

export default items
