import { combineReducers } from 'redux'
import items from './items'
import {TypedUseSelectorHook, useSelector} from "react-redux";

// TODO Ecrire un reducer qui gère le type d'action SET_ITEMS, puis ajouter ce reducer au 'global reducer'
export const reducer = combineReducers({})


export type RootState = ReturnType<typeof reducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
