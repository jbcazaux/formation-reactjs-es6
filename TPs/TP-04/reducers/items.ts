import Item from '../domain/Item'
import { ItemsAction } from '../actions/items'

const items = (state: ReadonlyArray<Item> = [], action: ItemsAction) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return action.items
    default:
      return state
  }
}

export default items
