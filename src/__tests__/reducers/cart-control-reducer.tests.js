import cartControlReducer from '../../reducers/cart-control-reducer';

describe('cartControlReducer', () => {

  let action;

  const currentState = {
    1: {
      name: 'shirt',
      description: "A t-shirt with the band's logo on it.",
    quantity: 1,
    id: 1
  }, 2: {
      name: 'button',
      description: "A button with the band's logo on it.",
      quantity: 7,
      id: 2
  }
}
  const orderData = {
    name: 'Test Item',
    description: 'Test Description',
    quantity: 1,
    id: 1
  };
  

  test('Should return default state if no action type is recognized', () => {
    expect(cartControlReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new order data to mainCartList', () => {
    const { name, description, quantity, id } = orderData;
    action = {
      type: 'ADD_ORDER',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    };

    expect(cartControlReducer({}, action)).toEqual({
      [id] : {
        name: name,
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
        name: 'button',
        description: "A button with the band's logo on it.",
        quantity: 7,
        id: 2
      }
    });
  });
});