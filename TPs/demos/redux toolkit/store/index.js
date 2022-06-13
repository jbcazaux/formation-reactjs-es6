import itemsReducer from '../slice/items'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store
