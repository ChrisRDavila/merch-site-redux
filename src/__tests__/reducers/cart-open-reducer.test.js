import cartOpenReducer from "../../reducers/cart-open-reducer";

describe("cartOpenReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(cartOpenReducer(false, { type: null})).toEqual(false);
  });
  test('Should toggle cart visibility state to true', () => {
    expect(cartOpenReducer(false, { type: 'TOGGLE_CART' })).toEqual(true);
  });
});