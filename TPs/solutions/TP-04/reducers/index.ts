import { combineReducers } from 'redux'
import items from './items'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const reducer = combineReducers({
  items,
})

export type RootState = ReturnType<typeof reducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
