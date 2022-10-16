import Item from '../domain/Item'
import { Action } from 'redux'

export const ADD_ITEMS = 'ADD_ITEMS'
export const SET_ITEMS = 'SET_ITEMS'

export interface ItemsAction extends Action<typeof ADD_ITEMS | typeof SET_ITEMS> {
  items: ReadonlyArray<Item>
}

export const setItems = (items: ReadonlyArray<Item>): ItemsAction => ({
  type: SET_ITEMS,
  items,
})

export const addItems = (items: ReadonlyArray<Item>): ItemsAction => ({
  type: ADD_ITEMS,
  items,
})
