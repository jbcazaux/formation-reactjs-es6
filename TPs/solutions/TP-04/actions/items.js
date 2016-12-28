export const setItems = (items) => {
  return {
      type: 'SET_ITEMS',
      items
  }
};

export const addItems = (items) => {
    return {
        type: 'ADD_ITEMS',
        items
    }
};