import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import cartOpenReducer from '../../reducers/cart-open-reducer';
import cartControlReducer from '../../reducers/cart-control-reducer'

let store = createStore(rootReducer);

describe("rootReducer", () => {
 
  test('Should return default state if no action type is recoginized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainCartList: {},
      cartOpen: false
    });
  });

  test('Check that intial state of cartControlReducer matches root reducer', () => {
      expect(store.getState().mainCartList).toEqual(cartControlReducer(undefined, { type: null }));
    });
  
  test('Check that intial state of cartOpenReducer matches root reducer', () => {
      expect(store.getState().cartOpen).toEqual(cartOpenReducer(undefined, { type: null }));
  });
  
  test(' Check that ADD_ORDER action works for cartControlReducer and root reducer', () =>{
    const action = {
        type: 'ADD_ORDER',
        item: "item",
        description: "description",
        quantity: 1,
        id: 1
      }
      store.dispatch(action);
      expect(store.getState().mainCartList).toEqual(cartControlReducer(undefined, action));
    });
  test('Check that TOGGLE_CART action works for cartOpenReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_CART'
    }
    store.dispatch(action);
    expect(store.getState().cartOpen).toEqual(cartOpenReducer(undefined, action));
  });
});






