import cartControlReducer from '../../reducers/cart-control-reducer';

describe('cartControlReducer', () => {

  let action;

  const currentState = {
    1: {
      item: 'shirt',
      description: "A t-shirt with the band's logo on it.",
    quantity: 1,
    id: 1
  }, 2: {
      item: 'button',
      description: "A button with the band's logo on it.",
      quantity: 7,
      id: 2
  }
}
  const orderData = {
    item: 'Test Item',
    description: 'Test Description',
    quantity: 1,
    id: 1
  };
  

  test('Should return default state if no action type is recognized', () => {
    expect(cartControlReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new order data to mainCartList', () => {
    const { item, description, quantity, id } = orderData;
    action = {
      type: 'ADD_ORDER',
      item: item,
      description: description,
      quantity: quantity,
      id: id
    };

    expect(cartControlReducer({}, action)).toEqual({
      [id] : {
        item: item,
        description: description,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete an order', () => {
    action = {
      type: 'DELETE_ORDER',
      id: 1
    };
    expect(cartControlReducer(currentState, action)).toEqual({
      2: {
        item: 'button',
        description: "A button with the band's logo on it.",
        quantity: 7,
        id: 2
      }
    });
  });
});

// type: 'ADD_ORDER',
// id: id,
// item: item,
// description: description,
// quantity: quantity,