const items = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return action.items;
        case 'ADD_ITEMS':
            return state.concat(action.items);
        default:
            return state;
    }
};

export default items;