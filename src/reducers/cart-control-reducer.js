const reducer = (state = {}, action) => {
  
  const { name, description, quantity, id } = action;
  switch (action.type) {
    case 'ADD_ORDER':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          quantity: quantity,
          id: id
        }
      });
    case 'DELETE_ORDER':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default: 
      return state;
  }
};

export default reducer;
