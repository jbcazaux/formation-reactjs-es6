import { createSlice } from '@reduxjs/toolkit'

export const itemsSlice = createSlice({
  name: 'items',
  initialState: { value: [] },
  reducers: {
    setItems: (state, action) => {
      state.value = action.payload
    },
    addItem: (state, action) => {
      state.value = state.value.concat(action.payload)
    },
  },
})

export const { setItems, addItem } = itemsSlice.actions

export default itemsSlice.reducer
